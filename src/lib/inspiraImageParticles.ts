/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */

export type InspiraImageParticleOptions = {
    width?: number;
    height?: number;
    maxWidth?: number | string;
    maxHeight?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    gravity?: number;
    particleGap?: number;
    particleSize?: number;
    layerCount?: number;
    depth?: number;
    rotationDuration?: number;
    growDuration?: number;
    waitDuration?: number;
    shrinkDuration?: number;
    shrinkDistance?: number;
    threeDimensional?: boolean | string;
    lifeCycle?: boolean | string;
    layerDistance?: number;
    initPosition?: "random" | "top" | "left" | "bottom" | "right" | "misplaced" | "none";
    initDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
    fadePosition?: "explode" | "top" | "left" | "bottom" | "right" | "random" | "none";
    fadeDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
    noise?: number;
    disableInteraction?: boolean;
    mouseForce?: number;
    clickStrength?: number;
    color?: string;
    colorArr?: number[];
    image?: HTMLImageElement;
    imageId?: string;
    imageUrl?: string;
    wrapperElement?: HTMLElement;
    canvas?: HTMLCanvasElement;
    context?: CanvasRenderingContext2D | WebGL2RenderingContext | WebGLRenderingContext;
    renderer?: "default" | "webgl";
    addTimestamp?: boolean;
    responsiveWidth?: boolean;
    nodeName?: string; // Added for compatibility with constructor check
    dataset?: any;     // Added for compatibility with constructor check
};

export class InspiraImageParticle {
    state: string = "stopped";
    touches: { x: number; y: number; z: number; force: number }[] = [];
    events: { [key: string]: ((params?: any) => void)[] } = {};

    // Properties initialized in _initSettings or other methods
    width: number = 0;
    height: number = 0;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    alphaFade: number = 0.4;
    gravity: number = 0.08;
    particleGap: number = 3;
    particleSize: number = 1;
    layerCount: number = 1;
    depth: number = 1;
    rotationDuration: number = 0;
    growDuration: number = 200;
    waitDuration: number = 200;
    shrinkDuration: number = 200;
    shrinkDistance: number = 50;
    threeDimensional: boolean = false;
    lifeCycle: boolean = false;
    layerDistance: number = 3;
    initPosition: string = "random";
    initDirection: string = "random";
    fadePosition: string = "none";
    fadeDirection: string = "none";
    noise: number = 10;
    disableInteraction?: boolean;
    mouseForce: number = 30;
    clickStrength: number = 0;
    color?: string;
    colorArr?: number[];

    // Image and Canvas related
    image?: HTMLImageElement;
    srcImage?: HTMLImageElement;
    imageUrl?: string;
    wrapperElement?: HTMLElement;
    canvas?: HTMLCanvasElement;
    context?: any; // Using any to support both 2D and WebGL contexts easily
    renderer: "default" | "webgl" = "default";
    responsiveWidth: boolean = false;

    // Internal state
    particles: any[] = [];
    origins: any[] = [];
    imageWidth: number = 0;
    imageHeight: number = 0;
    imageRatio: number = 1;
    renderSize: number = 0;
    renderWidth: number = 0;
    renderHeight: number = 0;
    offsetX: number = 0;
    offsetY: number = 0;
    speed: number = 0;
    gravityFactor: number = 1;
    vertices: number[] | false = false;
    ratio: number = 0;

    // WebGL specific
    fragmentShaderScript?: string;
    vertexShaderScript?: string;
    program?: WebGLProgram;
    vertexPosition?: number;
    vertexColor?: number;
    vertexBuffer?: WebGLBuffer;
    vertexOffset?: WebGLUniformLocation;
    uModelViewMatrix?: WebGLUniformLocation;
    uPerspectiveMatrix?: WebGLUniformLocation;
    uRotationMatrix?: WebGLUniformLocation;
    uPointSize?: WebGLUniformLocation;
    uDepth?: WebGLUniformLocation;
    minZ?: number;
    maxZ?: number;

    private _draw: () => void = () => { };

    constructor(optionsParam?: InspiraImageParticleOptions | HTMLImageElement | HTMLElement) {
        let options: InspiraImageParticleOptions = {};
        if (optionsParam) {
            // Check if optionsParam is an HTMLElement (like IMG) by checking nodeName
            if ((optionsParam as any).nodeName) {
                const element = optionsParam as HTMLElement;
                options = JSON.parse(JSON.stringify(element.dataset));
                if (element.nodeName === "IMG") {
                    options.image = element as HTMLImageElement;
                } else {
                    options.wrapperElement = element;
                }
            } else {
                options = optionsParam as InspiraImageParticleOptions;
            }
        }

        this.on("imageLoaded", this._onImageLoaded);
        this._initImage(options);
    }

    on(event: string, fn: (params?: any) => void) {
        this.events = this.events || {};
        this.events[event] = this.events[event] || [];
        this.events[event].push(fn);
    }

    emit(event: string, params?: any) {
        const events = this.events[event];
        if (events && events.length) {
            for (let eventIndex = 0; eventIndex < events.length; eventIndex++) {
                const cb = events[eventIndex];
                cb.call(this, params);
            }
        }
    }

    // Getter/Setter for renderer to handle context switching
    getRenderer() {
        return this.renderer;
    }

    setRenderer(value: "default" | "webgl") {
        this.renderer = value;
        this._draw = (this as any)["_" + value + "Renderer"];
        try {
            (this as any)["_" + value + "InitContext"]();
        } catch (e) {
            console.log(e);
            if (value !== "default") {
                this.setRenderer("default");
            }
        }
    }

    // Getter/Setter for color
    setColor(value: string) {
        this.color = value;
        this.colorArr = this._parseColor(value);
        if (this.colorArr) {
            if (isNaN(this.colorArr[3])) {
                this.colorArr[3] = 255;
            }
            if (0 < this.colorArr[3] && this.colorArr[3] <= 1) {
                this.colorArr[3] *= 255;
            }
        }
    }

    start(optionsParam?: Partial<InspiraImageParticleOptions>) {
        const options = optionsParam || {};
        this.initPosition = options.initPosition || this.initPosition;
        this.initDirection = options.initDirection || this.initDirection;
        if (this.canvas) {
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.style.display = "";
        }
        this._initOrigins();
        this._initParticles();
        this._webglSetAttributes();
        if (this.state !== "running") {
            this.state = "running";
            if (!this.disableInteraction) {
                if ("ontouchstart" in window || (window.navigator as any).msPointerEnabled) {
                    document.body.addEventListener("touchstart", this._touchHandler);
                    document.body.addEventListener("touchmove", this._touchHandler);
                    document.body.addEventListener("touchend", this._clearTouches);
                    document.body.addEventListener("touchcancel", this._clearTouches);
                } else {
                    this.canvas?.addEventListener("mousemove", this._mouseHandler);
                    this.canvas?.addEventListener("mouseout", this._clearTouches);
                    this.canvas?.addEventListener("click", this._clickHandler);
                }
            }
            this._animate();
        }
    }

    stop(optionsParam?: Partial<InspiraImageParticleOptions>) {
        const options = optionsParam || {};
        this.fadePosition = options.fadePosition || this.fadePosition;
        this.fadeDirection = options.fadeDirection || this.fadeDirection;
        this._fade();
        document.body.removeEventListener("touchstart", this._touchHandler);
        document.body.removeEventListener("touchmove", this._touchHandler);
        document.body.removeEventListener("touchend", this._clearTouches);
        document.body.removeEventListener("touchcancel", this._clearTouches);
        if (this.canvas) {
            this.canvas.removeEventListener("mousemove", this._mouseHandler);
            this.canvas.removeEventListener("mouseout", this._clearTouches);
            this.canvas.removeEventListener("click", this._clickHandler);
        }
    }

    _animate() {
        const _requestAnimationFrame =
            window.requestAnimationFrame ||
            (window as any).webkitRequestAnimationFrame ||
            (window as any).mozRequestAnimationFrame ||
            function (callback: FrameRequestCallback) {
                setTimeout(callback, 10);
            };

        if (this.state !== "stopped") {
            this._calculate();
            this._draw();
            _requestAnimationFrame(() => this._animate());
        } else {
            this.emit("stopped");
        }
    }

    get _mouseHandler() {
        return (e: MouseEvent) => {
            this.touches = [
                {
                    x: e.offsetX,
                    y: e.offsetY,
                    z: 49 + (this.layerCount - 1) * this.layerDistance,
                    force: 1,
                },
            ];
        };
    }

    get _clickHandler() {
        return () => { // e param unused
            const strength = this.clickStrength;
            this.origins.map((o) => (o.z -= strength));
            setTimeout(() => {
                this.origins.map((o) => (o.z += strength));
            }, 100);
        };
    }

    get _touchHandler() {
        return (e: TouchEvent) => {
            this.touches = [];
            if (!this.canvas) return;
            const rect = this.canvas.getBoundingClientRect();
            for (let touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
                const touch = e.changedTouches[touchIndex];
                if (touch.target === this.canvas) {
                    this.touches.push({
                        x: touch.pageX - rect.left,
                        y: touch.pageY - rect.top,
                        z: 49 + (this.layerCount - 1) * this.layerDistance,
                        force: (touch as any).force || 1,
                    });
                    e.preventDefault();
                }
            }
        };
    }

    get _clearTouches() {
        return () => { // e param unused
            this.touches = [];
        };
    }

    _onImageLoaded = (options: InspiraImageParticleOptions) => {
        if (!this.image) return;
        this.imageWidth = this.image.naturalWidth || this.image.width;
        this.imageHeight = this.image.naturalHeight || this.image.height;
        this.imageRatio = this.imageWidth / this.imageHeight;
        this.width = this.width || this.imageWidth;
        this.height = this.height || this.imageHeight;
        this.renderSize = (this.width + this.height) / 4;
        if (this.srcImage) {
            this.srcImage.style.display = "none";
        }
        this._initSettings(options);
        this._initContext(options);
        this._initResponsive(options);
        this.start();
    }

    _initImage(options: InspiraImageParticleOptions) {
        this.srcImage = options.image;
        if (!this.srcImage && options.imageId) {
            this.srcImage = document.getElementById(options.imageId) as HTMLImageElement;
        }
        this.imageUrl = options.imageUrl || this.srcImage?.src;
        this.image = document.createElement("img");
        this.wrapperElement = options.wrapperElement || this.srcImage?.parentElement || document.body;
        this.image.onload = () => this.emit("imageLoaded", options);
        this.image.crossOrigin = "Anonymous";
        if (options.addTimestamp && this.imageUrl) {
            if (/\?/.test(this.imageUrl)) {
                this.imageUrl += "&d=" + Date.now();
            } else {
                this.imageUrl += "?d=" + Date.now();
            }
        }
        if (this.imageUrl) {
            this.image.src = this.imageUrl;
        }
    }

    _initContext(options: InspiraImageParticleOptions) {
        this.canvas = options.canvas;
        if (!this.canvas && !this.context && this.wrapperElement) {
            this.canvas = document.createElement("canvas");
            this.wrapperElement.appendChild(this.canvas);
        }
        // if (this.convas) { // Typo in original code? Assuming it meant canvas or previous canvas
        //   this.convas.style.display = "none";
        // }
        this.context = options.context;
        this.setRenderer(options.renderer || "default");
    }

    _defaultInitContext() {
        this.context = this.context || this.canvas?.getContext("2d");
    }

    _webglInitContext() {
        this.context =
            this.context ||
            this.canvas?.getContext("webgl2") ||
            this.canvas?.getContext("experimental-webgl");

        if (!this.context) return;

        this.fragmentShaderScript = `#version 300 es
    
            precision highp float;
    
            in vec4 vColor;
            out vec4 fragColor;
    
            void main(void) {
              // fragColor = vec4(1, 1, 1, 0.1);
              fragColor = vColor;
            }
          `;

        this.vertexShaderScript = `#version 300 es
    
            precision highp float;
    
            in vec3 vertexPosition;
            in vec4 vertexColor;
            uniform vec3 vertexOffset;
            uniform float pointSize;
            uniform float depth;
            vec3 mirror = vec3(1, -1, 1);
    
            uniform mat4 modelViewMatrix;
            uniform mat4 perspectiveMatrix;
            uniform mat4 rotationMatrix;
    
            out vec4 vColor;
    
            void main(void) {
              gl_Position = rotationMatrix * perspectiveMatrix * modelViewMatrix * vec4(mirror * vertexPosition + vertexOffset, vertexPosition);
              gl_PointSize = pointSize + max((log(vertexPosition.z) - 3.91) * depth, -pointSize + 1.0);
              vColor = vertexColor;
            }
          `;
        this.context.viewport(0, 0, this.width, this.height);
        const vertexShader = this.context.createShader(this.context.VERTEX_SHADER);
        this.context.shaderSource(vertexShader, this.vertexShaderScript);
        this.context.compileShader(vertexShader);
        if (!this.context.getShaderParameter(vertexShader, this.context.COMPILE_STATUS)) {
            console.log(this.context.getShaderInfoLog(vertexShader));
        }
        const fragmentShader = this.context.createShader(this.context.FRAGMENT_SHADER);
        this.context.shaderSource(fragmentShader, this.fragmentShaderScript);
        this.context.compileShader(fragmentShader);
        if (!this.context.getShaderParameter(fragmentShader, this.context.COMPILE_STATUS)) {
            console.log(this.context.getShaderInfoLog(fragmentShader));
        }
        this.program = this.context.createProgram();
        this.context.attachShader(this.program, vertexShader);
        this.context.attachShader(this.program, fragmentShader);
        this.context.linkProgram(this.program);
        this.context.useProgram(this.program);
        this.vertexPosition = this.context.getAttribLocation(this.program, "vertexPosition");
        this.context.enableVertexAttribArray(this.vertexPosition);
        this.vertexColor = this.context.getAttribLocation(this.program, "vertexColor");
        this.context.enableVertexAttribArray(this.vertexColor);
        this.context.clearColor(0.0, 0.0, 0.0, 0.0);
        this.context.enable(this.context.BLEND);
        this.context.disable(this.context.DEPTH_TEST);
        this.context.blendFunc(this.context.SRC_ALPHA, this.context.ONE);
        this.vertexBuffer = this.context.createBuffer();
        this.context.bindBuffer(this.context.ARRAY_BUFFER, this.vertexBuffer);
        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
        this.vertexOffset = this.context.getUniformLocation(this.program, "vertexOffset");
        this.context.uniform3f(this.vertexOffset, 0, 0, 1000);
        this.context.vertexAttribPointer(this.vertexPosition, 3.0, this.context.FLOAT, false, 28, 0);
        this.context.vertexAttribPointer(this.vertexColor, 4.0, this.context.FLOAT, false, 28, 12);
        this.uModelViewMatrix = this.context.getUniformLocation(this.program, "modelViewMatrix");
        this.uPerspectiveMatrix = this.context.getUniformLocation(this.program, "perspectiveMatrix");
        this.uRotationMatrix = this.context.getUniformLocation(this.program, "rotationMatrix");
        this.uPointSize = this.context.getUniformLocation(this.program, "pointSize");
        this.uDepth = this.context.getUniformLocation(this.program, "depth");
        // this.uVertexColors = this.context.getUniformLocation(this.program, 'vertexColors');
        // this.uVertexIndex = this.context.getUniformLocation(this.program, 'vertexIndex');

        this._webglSetAttributes();
    }

    _webglSetAttributes() {
        if (this.renderer === "webgl" && this.context) {
            const fieldOfView = 1;
            const aspectRatio = (this.canvas?.width || 1) / (this.canvas?.height || 1);
            const nearPlane = 10;
            const farPlane = 100;
            const top = nearPlane * Math.tan((fieldOfView * Math.PI) / 360.0);
            const bottom = -top;
            const right = top * aspectRatio;
            const left = -right;
            const a = (right + left) / (right - left);
            const b = (top + bottom) / (top - bottom);
            const c = (farPlane + nearPlane) / (farPlane - nearPlane);
            const d = (2 * farPlane * nearPlane) / (farPlane - nearPlane);
            const x = (2 * nearPlane) / (right - left);
            const y = (2 * nearPlane) / (top - bottom);

            const perspectiveMatrix = [x, 0, a, 0, 0, y, b, 0, 0, 0, c, d, 0, 0, -1, 0];
            const modelViewMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            this.context.viewport(0, 0, this.width, this.height);
            this.context.uniformMatrix4fv(
                this.uModelViewMatrix,
                false,
                new Float32Array(perspectiveMatrix),
            );
            this.context.uniformMatrix4fv(
                this.uPerspectiveMatrix,
                false,
                new Float32Array(modelViewMatrix),
            );
            this.context.uniform1f(this.uPointSize, this.particleSize);
            this.context.uniform1f(this.uDepth, this.depth);
            // this.context.uniform4fv(this.uVertexColors, new Float32Array(this.vertexColors));
            // this.context.uniform1f(this.uVertexIndex, 0);
            this._updateRotation();
        }
    }

    _updateRotation() {
        if (!this.context) return;
        const rotationX = 0; // Was global in original
        const rotationY = 0; // Was global in original
        const a = Math.cos(rotationX);
        const b = Math.sin(rotationX);
        const c = Math.cos(rotationY);
        const d = Math.sin(rotationY);
        const rotationMatrix = [c, 0, d, 0, 0, a, -b, 0, -c, b, a, 0, 0, 0, 0, 1];
        this.context.uniformMatrix4fv(this.uRotationMatrix, false, new Float32Array(rotationMatrix));
    }

    _webglRenderer() {
        if (!this.context) return;
        const vertices = new Float32Array(this.vertices as number[]);
        this.context.bufferData(this.context.ARRAY_BUFFER, vertices, this.context.STATIC_DRAW);
        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
        this.context.drawArrays(this.context.POINTS, 0, this.particles.length);
        this.context.flush();
    }

    _initSettings(options: InspiraImageParticleOptions) {
        this.width = (options.width as number) * 1 || this.width;
        this.height = (options.height as number) * 1 || this.height;

        const parseDimension = (value: number | string | undefined, base: number) => {
            if (value === undefined) return undefined;
            if (typeof value === 'string' && /%$/.test(value)) {
                return (base * parseFloat(value.replace("%", ""))) / 100;
            }
            return Number(value);
        };

        this.maxWidth = parseDimension(options.maxWidth, this.width);
        this.maxHeight = parseDimension(options.maxHeight, this.height);
        this.minWidth = parseDimension(options.minWidth, this.width);
        this.minHeight = parseDimension(options.minHeight, this.height);

        this.alphaFade = 0.4;
        this.gravity = (options.gravity as number) * 1 || 0.08;
        this.particleGap = (options.particleGap as number) * 1 || 3;
        this.particleSize = (options.particleSize as number) * 1 || 1;
        this.layerCount = (options.layerCount as number) * 1 || 1;
        this.depth = (options.depth as number) * 1 || 1;
        this.rotationDuration = (options.rotationDuration as number) * 1 || 0;
        this.growDuration = (options.growDuration as number) * 1 || 200;
        this.waitDuration = (options.waitDuration as number) * 1 || 200;
        this.shrinkDuration = (options.shrinkDuration as number) * 1 || 200;
        this.shrinkDistance = (options.shrinkDistance as number) * 1 || 50;
        this.threeDimensional =
            options.threeDimensional !== undefined && options.threeDimensional !== "false"
                ? !!options.threeDimensional
                : false;
        this.lifeCycle =
            options.lifeCycle !== undefined && options.lifeCycle !== "false"
                ? !!options.lifeCycle
                : false;
        this.layerDistance = options.layerDistance || this.particleGap;
        this.initPosition = options.initPosition || "random";
        this.initDirection = options.initDirection || "random";
        this.fadePosition = options.fadePosition || "none";
        this.fadeDirection = options.fadeDirection || "none";
        this.noise = isNaN((options.noise as number) * 1) ? 10 : (options.noise as number) * 1;
        this.disableInteraction = options.disableInteraction;
        this.mouseForce = (options.mouseForce as number) * 1 || 30;
        this.clickStrength = (options.clickStrength as number) * 1 || 0;
        this.color = options.color;
        this.colorArr = options.colorArr || this.colorArr;

        // If color is set, parse it
        if (this.color) {
            this.setColor(this.color);
        }
    }

    _initResponsive(options: InspiraImageParticleOptions) {
        this.responsiveWidth = !!(this.wrapperElement && options.responsiveWidth);
        if (this.responsiveWidth && this.wrapperElement) {
            this.on("stopped", () => {
                if (this.wrapperElement) {
                    this.width = this.wrapperElement.clientWidth;
                    this.start();
                }
            });
            this.wrapperElement.addEventListener("resize", () => {
                if (this.wrapperElement && this.width !== this.wrapperElement.clientWidth) {
                    this.stop();
                }
            });
            this.width = this.wrapperElement.clientWidth;
        }
    }

    _calculate() {
        this.vertices = this.renderer === "webgl" ? [] : false;
        let renderCount = 0;

        for (let index = 0; index < this.particles.length; index++) {
            const origin = this.origins[index];
            const particle = this.particles[index];
            let dX = origin.x - particle.x + (Math.random() - 0.5) * this.noise;
            let dY = origin.y - particle.y + (Math.random() - 0.5) * this.noise;
            let dZ = origin.z - particle.z + ((Math.random() - 0.5) * this.noise) / 1000;
            let distance = Math.sqrt(dX * dX + dY * dY + dZ * dZ);
            let force = distance * 0.01;
            particle.vx += force * (dX / distance) * this.speed;
            particle.vy += force * (dY / distance) * this.speed;
            particle.vz += force * (dZ / distance) * this.speed;

            for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
                const touch = this.touches[touchIndex];
                dX = particle.x - touch.x;
                dY = particle.y - touch.y;
                dZ = particle.z - touch.z;
                distance = Math.sqrt(dX * dX + dY * dY + dZ * dZ);
                force = (this.mouseForce * touch.force) / distance;
                particle.vx += force * (dX / distance) * this.speed;
                particle.vy += force * (dY / distance) * this.speed;
                particle.vz += force * (dZ / distance) * this.speed;
            }
            particle.vx *= this.gravityFactor;
            particle.vy *= this.gravityFactor;
            particle.vz *= this.gravityFactor;
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.z += particle.vz;

            if (
                0 > particle.x ||
                particle.x >= this.width ||
                0 > particle.y ||
                particle.y >= this.height
            ) {
                particle.isHidden = true;
                if (this.state === "stopping") {
                    particle.isDead = true;
                }
            } else {
                if (this.state === "stopping" && !particle.isDead) {
                    renderCount++;
                }
                particle.isHidden = false;
            }

            if (this.vertices) {
                let x = particle.x - this.width / 2;
                let y = particle.y - this.height / 2;
                let z = particle.z;
                let a = origin.vertexColors[3];
                if (this.lifeCycle) {
                    origin.tick += 1;
                    if (origin.tick >= 0) {
                        if (origin.tick < this.growDuration) {
                            a = a * (origin.tick / this.growDuration);
                            // z -= 50 * (tick / this.shrinkDuration);
                        } else {
                            const tick = origin.tick - this.growDuration - this.waitDuration;
                            if (tick >= 0 && tick <= this.shrinkDuration) {
                                // touch = this.touches[touchIndex]; // touchIndex undefined here in original?
                                // rotationX = Math.PI / 2 + Math.cos(dX * Math.PI / 2) * dX * Math.PI * 0.1;
                                // rotationY = Math.PI / 2 + Math.cos(dY * Math.PI / 2) * dY * Math.PI * 0.1;
                                distance = Math.sqrt(x * x + y * y + (z - 50) * (z - 50));
                                // distance = Math.sqrt(x * x + y * y);
                                force = tick / this.shrinkDuration;
                                x += this.shrinkDistance * (x / distance) * force;
                                y += this.shrinkDistance * (y / distance) * force;
                                z += this.shrinkDistance * ((z - 50) / distance) * force;
                                a *= 1 - force;
                                if (tick === this.shrinkDuration) {
                                    origin.tick = 0;
                                }
                            }
                        }
                    } else {
                        a = 0;
                    }
                }
                (this.vertices as number[]).push(
                    x,
                    y,
                    z,
                    origin.vertexColors[0],
                    origin.vertexColors[1],
                    origin.vertexColors[2],
                    a,
                );
            }
        }
        if (this.state === "stopping" && renderCount === 0) {
            this.state = "stopped";
        }
    }

    _defaultRenderer() {
        if (!this.context) return;
        this.depth = Math.max((this.layerDistance * this.layerCount) / 2, this.mouseForce);
        this.minZ = -this.depth;
        this.maxZ = this.depth;
        const imageData = this.context.createImageData(this.width, this.height);

        for (let index = 0; index < this.origins.length; index++) {
            const origin = this.origins[index];
            const particle = this.particles[index];
            if (!particle.isDead && !particle.isHidden) {
                const x = ~~particle.x;
                const y = ~~particle.y;
                let a = origin.color[3];
                if (this.alphaFade > 0 && this.layerCount > 1) {
                    const z = Math.max(Math.min(particle.z, this.maxZ), this.minZ) - this.minZ;
                    a = a * (1 - this.alphaFade) + a * this.alphaFade * (z / (this.maxZ - this.minZ));
                    a = Math.max(Math.min(~~a, 255), 0);
                }
                const startIndex = (x + y * this.width) * 4;
                imageData.data[startIndex + 0] = origin.color[0];
                imageData.data[startIndex + 1] = origin.color[1];
                imageData.data[startIndex + 2] = origin.color[2];
                imageData.data[startIndex + 3] = a;
            }
        }
        this.context.putImageData(imageData, 0, 0);
    }

    _initParticles() {
        this.particles = [];
        for (let index = 0; index < this.origins.length; index++) {
            const origin = this.origins[index];
            const particle: any = {};
            this._initParticlePosition(origin, particle);
            this._initParticleDirection(particle);
            this.particles.push(particle);
        }
    }

    _initParticlePosition(origin: any, particle: any) {
        particle.z = 0;
        switch (this.initPosition) {
            case "random": {
                particle.x = Math.random() * this.width;
                particle.y = Math.random() * this.height;
                break;
            }
            case "top": {
                particle.x = Math.random() * this.width * 3 - this.width;
                particle.y = -Math.random() * this.height;
                break;
            }
            case "left": {
                particle.x = -Math.random() * this.width;
                particle.y = Math.random() * this.height * 3 - this.height;
                break;
            }
            case "bottom": {
                particle.x = Math.random() * this.width * 3 - this.width;
                particle.y = this.height + Math.random() * this.height;
                break;
            }
            case "right": {
                particle.x = this.width + Math.random() * this.width;
                particle.y = Math.random() * this.height * 3 - this.height;
                break;
            }
            case "misplaced": {
                particle.x = origin.x + Math.random() * this.width * 0.3 - this.width * 0.1;
                particle.y = origin.y + Math.random() * this.height * 0.3 - this.height * 0.1;
                break;
            }
            default: {
                particle.x = origin.x;
                particle.y = origin.y;
            }
        }
    }

    _fade() {
        if (
            this.fadePosition === "explode" ||
            this.fadePosition === "top" ||
            this.fadePosition === "left" ||
            this.fadePosition === "bottom" ||
            this.fadePosition === "right"
        ) {
            this.state = "stopping";
        } else {
            this.state = "stopped";
        }
        if (this.origins) {
            for (let index = 0; index < this.origins.length; index++) {
                this._fadeOriginPosition(this.origins[index]);
                this._fadeOriginDirection(this.particles[index]);
            }
        }
    }

    _fadeOriginPosition(origin: any) {
        switch (this.fadePosition) {
            case "random": {
                origin.x = Math.random() * this.width * 2 - this.width;
                origin.y = Math.random() * this.height * 2 - this.height;
                if (origin.x > 0) origin.x += this.width;
                if (origin.y > 0) origin.y += this.height;
                break;
            }
            case "top": {
                origin.x = Math.random() * this.width * 3 - this.width;
                origin.y = -Math.random() * this.height;
                break;
            }
            case "left": {
                origin.x = -Math.random() * this.width;
                origin.y = Math.random() * this.height * 3 - this.height;
                break;
            }
            case "bottom": {
                origin.x = Math.random() * this.width * 3 - this.width;
                origin.y = this.height + Math.random() * this.height;
                break;
            }
            case "right": {
                origin.x = this.width + Math.random() * this.width;
                origin.y = Math.random() * this.height * 3 - this.height;
                break;
            }
            default: {
                // Stay in place
            }
        }
    }

    _initParticleDirection(particle: any) {
        particle.vz = 0;
        let angle, intensity;
        switch (this.initDirection) {
            case "random": {
                angle = Math.random() * Math.PI * 2;
                intensity = Math.random();
                particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            case "top": {
                angle = Math.random() * Math.PI - Math.PI / 2;
                intensity = Math.random();
                particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            case "left": {
                angle = Math.random() * Math.PI + Math.PI;
                intensity = Math.random();
                particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            case "bottom": {
                angle = Math.random() * Math.PI + Math.PI / 2;
                intensity = Math.random();
                particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            case "right": {
                angle = Math.random() * Math.PI;
                intensity = Math.random();
                particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            default: {
                particle.vx = 0;
                particle.vy = 0;
            }
        }
    }

    _fadeOriginDirection(particle: any) {
        let angle, intensity;
        switch (this.fadeDirection) {
            case "random": {
                angle = Math.random() * Math.PI * 2;
                intensity = Math.random();
                particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            case "top": {
                angle = Math.random() * Math.PI - Math.PI / 2;
                intensity = Math.random();
                particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            case "left": {
                angle = Math.random() * Math.PI + Math.PI;
                intensity = Math.random();
                particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            case "bottom": {
                angle = Math.random() * Math.PI + Math.PI / 2;
                intensity = Math.random();
                particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            case "right": {
                angle = Math.random() * Math.PI;
                intensity = Math.random();
                particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
                particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
                break;
            }
            default: {
                particle.vx = 0;
                particle.vy = 0;
            }
        }
    }
    _initOrigins() {
        const canvas = document.createElement("canvas");
        if (this.responsiveWidth && this.wrapperElement) {
            this.width = this.wrapperElement.clientWidth;
        }
        this.ratio =
            Math.min(this.width, (this.maxWidth as number) || Number.POSITIVE_INFINITY) /
            Math.min(this.height, (this.maxHeight as number) || Number.POSITIVE_INFINITY);
        if (this.ratio < this.imageRatio) {
            this.renderWidth = ~~Math.min(
                this.width || Number.POSITIVE_INFINITY,
                this.minWidth || this.imageWidth || Number.POSITIVE_INFINITY,
                (this.maxWidth as number) || Number.POSITIVE_INFINITY,
            );
            this.renderHeight = ~~(this.renderWidth / this.imageRatio);
        } else {
            this.renderHeight = ~~Math.min(
                this.height || Number.POSITIVE_INFINITY,
                this.minHeight || this.imageHeight || Number.POSITIVE_INFINITY,
                (this.maxHeight as number) || Number.POSITIVE_INFINITY,
            );
            this.renderWidth = ~~(this.renderHeight * this.imageRatio);
        }
        this.offsetX = ~~((this.width - this.renderWidth) / 2);
        this.offsetY = ~~((this.height - this.renderHeight) / 2);
        canvas.width = this.renderWidth;
        canvas.height = this.renderHeight;
        const context = canvas.getContext("2d");
        if (!context || !this.image) return;
        context.drawImage(this.image, 0, 0, this.renderWidth, this.renderHeight);
        const data = context.getImageData(0, 0, this.renderWidth, this.renderHeight).data;
        this.origins = [];
        const duration = this.growDuration + this.waitDuration + this.shrinkDuration;
        for (let x = 0; x < this.renderWidth; x += this.particleGap) {
            for (let y = 0; y < this.renderHeight; y += this.particleGap) {
                const index = (x + y * this.renderWidth) * 4;
                const a = data[index + 3];
                if (a > 0) {
                    const seed = Math.random();
                    const tick = -Math.floor(seed * duration);
                    if (this.colorArr) {
                        for (let layerIndex = 0; layerIndex < this.layerCount; layerIndex++) {
                            this.origins.push({
                                x: this.offsetX + x,
                                y: this.offsetY + y,
                                z: layerIndex * this.layerDistance + 50,
                                color: this.colorArr,
                                tick,
                                seed,
                                vertexColors: this.colorArr.map((c) => c / 255),
                            });
                        }
                    } else {
                        const r = data[index];
                        const g = data[index + 1];
                        const b = data[index + 2];
                        for (let layerIndex = 0; layerIndex < this.layerCount; layerIndex++) {
                            this.origins.push({
                                x: this.offsetX + x,
                                y: this.offsetY + y,
                                z: layerIndex * this.layerDistance + 50,
                                color: [r, g, b, a],
                                tick,
                                seed,
                                vertexColors: [r / 255, g / 255, b / 255, a / 255],
                            });
                        }
                    }
                }
            }
        }
        this.speed = Math.log(this.origins.length) / 10;
        this.gravityFactor = 1 - this.gravity * this.speed;
    }

    _parseColor(strParam: string) {
        let color;
        if (typeof strParam !== "string") {
            return undefined;
        }
        const str = strParam.replace(" ", "");

        if ((color = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(str))) {
            color = [parseInt(color[1], 16), parseInt(color[2], 16), parseInt(color[3], 16)];
        } else if ((color = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(str))) {
            color = [
                parseInt(color[1], 16) * 17,
                parseInt(color[2], 16) * 17,
                parseInt(color[3], 16) * 17,
            ];
        } else if ((color = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(str))) {
            color = [+color[1], +color[2], +color[3], +color[4]];
        } else if ((color = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(str))) {
            color = [+color[1], +color[2], +color[3]];
        } else return undefined;

        return color;
    }
}

export const inspiraImageParticles = () => {
    return {
        InspiraImageParticle,
    };
};

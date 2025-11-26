"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { SilkBackground } from '@/components/ui/bg-silk';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import ShaderToy from '@/components/ui/shader-toy/ShaderToy';
import Orb from '@/components/Orb';
import Plasma from '@/components/Plasma';
import { GradientBars } from '@/components/ui/gradient-bars';
import { LightRays } from '@/components/ui/light-rays';
import { OrbCard } from '@/components/ui/orb-card';
import ColorBends from '@/components/ColorBends';
import { ParticleCircle } from '@/components/ui/particle-circle';

// Simple shader code for testing
const testShaderCode = `
void mainImage(out vec4 fragColor, vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    vec3 col = 0.5 + 0.5 * cos(iTime + uv.xyx + vec3(0, 2, 4));
    fragColor = vec4(col, 1.0);
}
`;

export default function BackgroundEffectsGallery() {
  const [silkHue, setSilkHue] = useState(300);
  const [silkSaturation, setSilkSaturation] = useState(0.5);
  const [silkBrightness, setSilkBrightness] = useState(1);
  const [silkSpeed, setSilkSpeed] = useState(1);
  
  const [orbHue, setOrbHue] = useState(0);
  const [orbHoverIntensity, setOrbHoverIntensity] = useState(0.2);
  const [orbRimThickness, setOrbRimThickness] = useState(1.05);
  
  const [plasmaColor, setPlasmaColor] = useState('#ffffff');
  const [plasmaSpeed, setPlasmaSpeed] = useState(1);
  const [plasmaOpacity, setPlasmaOpacity] = useState(1);
  const [plasmaScale, setPlasmaScale] = useState(1);
  
  const [lightRaysCount, setLightRaysCount] = useState(7);
  const [lightRaysBlur, setLightRaysBlur] = useState(36);
  const [lightRaysSpeed, setLightRaysSpeed] = useState(14);
  
  const [gradientBarsCount, setGradientBarsCount] = useState(20);
  const [colorBendsSpeed, setColorBendsSpeed] = useState(0.2);
  const [colorBendsFrequency, setColorBendsFrequency] = useState(1.05);

  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="fixed inset-0 opacity-10b pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Background Effects Gallery
            </h1>
            <Button variant="outline" asChild>
              <a href="/componentTestbed">View Components →</a>
            </Button>
          </div>
          <p className="text-gray-400 text-lg">
            Interactive showcase of all available background effects and animations
          </p>
        </div>

        <Tabs defaultValue="silk" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="silk">Silk</TabsTrigger>
            <TabsTrigger value="orb">Orb</TabsTrigger>
            <TabsTrigger value="plasma">Plasma</TabsTrigger>
            <TabsTrigger value="shader">Shader</TabsTrigger>
            <TabsTrigger value="gradient">Gradient</TabsTrigger>
            <TabsTrigger value="lightrays">Light Rays</TabsTrigger>
            <TabsTrigger value="colorbends">Color Bends</TabsTrigger>
            <TabsTrigger value="orbcard">Orb Card</TabsTrigger>
          </TabsList>

          {/* Silk Background */}
          <TabsContent value="silk" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Silk Background</CardTitle>
                <CardDescription>Animated silk fabric shader effect</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Hue: {silkHue}</Label>
                    <Slider
                      value={[silkHue]}
                      onValueChange={(val) => setSilkHue(val[0])}
                      min={0}
                      max={360}
                      step={1}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Saturation: {silkSaturation.toFixed(2)}</Label>
                    <Slider
                      value={[silkSaturation]}
                      onValueChange={(val) => setSilkSaturation(val[0])}
                      min={0}
                      max={1}
                      step={0.01}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Brightness: {silkBrightness.toFixed(2)}</Label>
                    <Slider
                      value={[silkBrightness]}
                      onValueChange={(val) => setSilkBrightness(val[0])}
                      min={0}
                      max={2}
                      step={0.01}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Speed: {silkSpeed.toFixed(2)}</Label>
                    <Slider
                      value={[silkSpeed]}
                      onValueChange={(val) => setSilkSpeed(val[0])}
                      min={0}
                      max={3}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="relative h-96 w-full rounded-lg overflow-hidden border border-white/10">
                  <SilkBackground
                    hue={silkHue}
                    saturation={silkSaturation}
                    brightness={silkBrightness}
                    speed={silkSpeed}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <p className="text-white/80 font-medium bg-black/50 px-4 py-2 rounded-lg">
                      Silk Background Effect
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orb */}
          <TabsContent value="orb" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Orb</CardTitle>
                <CardDescription>3D interactive orb with hover effects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Hue: {orbHue}</Label>
                    <Slider
                      value={[orbHue]}
                      onValueChange={(val) => setOrbHue(val[0])}
                      min={0}
                      max={360}
                      step={1}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Hover Intensity: {orbHoverIntensity.toFixed(2)}</Label>
                    <Slider
                      value={[orbHoverIntensity]}
                      onValueChange={(val) => setOrbHoverIntensity(val[0])}
                      min={0}
                      max={1}
                      step={0.01}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Rim Thickness: {orbRimThickness.toFixed(2)}</Label>
                    <Slider
                      value={[orbRimThickness]}
                      onValueChange={(val) => setOrbRimThickness(val[0])}
                      min={1}
                      max={1.5}
                      step={0.01}
                    />
                  </div>
                </div>
                <div className="relative h-96 w-full rounded-lg overflow-hidden border border-white/10 flex items-center justify-center bg-black/50">
                  <Orb
                    hue={orbHue}
                    hoverIntensity={orbHoverIntensity}
                    rimThickness={orbRimThickness}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Plasma */}
          <TabsContent value="plasma" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Plasma</CardTitle>
                <CardDescription>WebGL plasma effect with mouse interaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Color</Label>
                    <Input
                      type="color"
                      value={plasmaColor}
                      onChange={(e) => setPlasmaColor(e.target.value)}
                      className="w-32 h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Speed: {plasmaSpeed.toFixed(2)}</Label>
                    <Slider
                      value={[plasmaSpeed]}
                      onValueChange={(val) => setPlasmaSpeed(val[0])}
                      min={0}
                      max={3}
                      step={0.1}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Opacity: {plasmaOpacity.toFixed(2)}</Label>
                    <Slider
                      value={[plasmaOpacity]}
                      onValueChange={(val) => setPlasmaOpacity(val[0])}
                      min={0}
                      max={1}
                      step={0.01}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Scale: {plasmaScale.toFixed(2)}</Label>
                    <Slider
                      value={[plasmaScale]}
                      onValueChange={(val) => setPlasmaScale(val[0])}
                      min={0.5}
                      max={2}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="relative h-96 w-full rounded-lg overflow-hidden border border-white/10">
                  <Plasma
                    color={plasmaColor}
                    speed={plasmaSpeed}
                    opacity={plasmaOpacity}
                    scale={plasmaScale}
                    mouseInteractive={true}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Shader Toy */}
          <TabsContent value="shader" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Shader Toy</CardTitle>
                <CardDescription>Custom shader effects using ShaderToy format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative h-96 w-full rounded-lg overflow-hidden border border-white/10">
                  <ShaderToy
                    shaderCode={testShaderCode}
                    hue={0}
                    saturation={1}
                    brightness={1}
                    speed={1}
                    mouseMode="hover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <p className="text-white/80 font-medium bg-black/50 px-4 py-2 rounded-lg">
                      Shader Toy Effect
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gradient Bars */}
          <TabsContent value="gradient" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Gradient Bars</CardTitle>
                <CardDescription>Animated gradient bars background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Bar Count: {gradientBarsCount}</Label>
                    <Slider
                      value={[gradientBarsCount]}
                      onValueChange={(val) => setGradientBarsCount(val[0])}
                      min={5}
                      max={50}
                      step={1}
                    />
                  </div>
                </div>
                <div className="relative h-96 w-full rounded-lg overflow-hidden border border-white/10">
                  <GradientBars
                    bars={gradientBarsCount}
                    colors={['#e60a64', 'transparent']}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <p className="text-white/80 font-medium bg-black/50 px-4 py-2 rounded-lg">
                      Gradient Bars Effect
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Light Rays */}
          <TabsContent value="lightrays" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Light Rays</CardTitle>
                <CardDescription>Animated light rays sweeping across the screen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Ray Count: {lightRaysCount}</Label>
                    <Slider
                      value={[lightRaysCount]}
                      onValueChange={(val) => setLightRaysCount(val[0])}
                      min={3}
                      max={15}
                      step={1}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Blur: {lightRaysBlur}px</Label>
                    <Slider
                      value={[lightRaysBlur]}
                      onValueChange={(val) => setLightRaysBlur(val[0])}
                      min={10}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Speed: {lightRaysSpeed}</Label>
                    <Slider
                      value={[lightRaysSpeed]}
                      onValueChange={(val) => setLightRaysSpeed(val[0])}
                      min={5}
                      max={30}
                      step={1}
                    />
                  </div>
                </div>
                <div className="relative h-96 w-full rounded-lg overflow-hidden border border-white/10">
                  <LightRays
                    count={lightRaysCount}
                    blur={lightRaysBlur}
                    speed={lightRaysSpeed}
                    color="rgba(160, 210, 255, 0.2)"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <p className="text-white/80 font-medium bg-black/50 px-4 py-2 rounded-lg">
                      Light Rays Effect
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Color Bends */}
          <TabsContent value="colorbends" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Color Bends</CardTitle>
                <CardDescription>Animated color wave effects with mouse interaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Speed: {colorBendsSpeed.toFixed(2)}</Label>
                    <Slider
                      value={[colorBendsSpeed]}
                      onValueChange={(val) => setColorBendsSpeed(val[0])}
                      min={0}
                      max={1}
                      step={0.01}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Frequency: {colorBendsFrequency.toFixed(2)}</Label>
                    <Slider
                      value={[colorBendsFrequency]}
                      onValueChange={(val) => setColorBendsFrequency(val[0])}
                      min={0.5}
                      max={2}
                      step={0.01}
                    />
                  </div>
                </div>
                <div className="relative h-96 w-full rounded-lg overflow-hidden border border-white/10">
                  <ColorBends
                    colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
                    rotation={0}
                    speed={colorBendsSpeed}
                    scale={1}
                    frequency={colorBendsFrequency}
                    warpStrength={1}
                    mouseInfluence={0.35}
                    parallax={0}
                    noise={0.1}
                    transparent={true}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <p className="text-white/80 font-medium bg-black/50 px-4 py-2 rounded-lg">
                      Color Bends Effect
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orb Card */}
          <TabsContent value="orbcard" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Orb Card</CardTitle>
                <CardDescription>Card component with integrated orb effect</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="max-w-md w-full">
                    <OrbCard
                      orbPosition="top-right"
                      orbHue={200}
                      orbHoverIntensity={0.3}
                      orbSize={200}
                      orbRimThickness={1.15}
                    >
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Orb Card Example</h3>
                        <p className="text-white/70">
                          This card features an interactive orb positioned at the corner.
                          Hover over the card to see the orb react to your mouse movement.
                        </p>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </OrbCard>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Particle Circle */}
          <TabsContent value="particlecircle" className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Particle Circle</CardTitle>
                <CardDescription>Interactive particle circle with mouse interaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
              <div className="relative h-screen w-full overflow-hidden">
                <ParticleCircle
                  colors={["#9c88ff", "#7c3aed", "#a855f7", "#c084fc"]}
                  particleSize={[1, 5]}
                  particleCount={1500}
                  size={400}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <p className="text-xl font-semibold">Content over particle circle</p>
                </div>
              </div>
                            </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


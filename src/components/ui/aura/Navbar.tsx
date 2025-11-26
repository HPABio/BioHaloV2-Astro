import React from "react";

export function Navbar() {
    return (
        <header className="fixed z-40 xl:bg-black/20 bg-black/80 border-white/10 border-b top-0 right-0 left-0 backdrop-blur-lg">
            <div className="sm:px-8 max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[130px] h-[20px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f3db1202-96e3-416d-8235-c9d02c748d03_1600w.png)] bg-cover rounded pt-2 pb-2 invert"
                    ></a>
                    <nav className="hidden md:flex items-center gap-7 text-sm text-slate-400">
                        <a className="transition-colors hover:text-slate-100" href="#">
                            Services
                        </a>
                        <a className="transition-colors hover:text-slate-100" href="#">
                            Portfolio
                        </a>
                        <a className="transition-colors hover:text-slate-100" href="#">
                            Pricing
                        </a>
                    </nav>
                    <div className="hidden sm:flex items-center gap-3">
                        <button className="px-3.5 py-2 rounded-md text-sm text-slate-300 hover:text-slate-100">
                            Log in
                        </button>
                        <button className="px-3.5 py-2 rounded-md text-sm text-black bg-slate-100 hover:bg-slate-200">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

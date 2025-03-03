import React from 'react';
import wood1 from '../../assets/wood1.png';
import wood2 from '../../assets/wood2.png';
import wood3 from '../../assets/wood3.png';
const WoodWeWorkWith = () => {
    return (
        <div class="bg-[#211f21] bg-pattern min-h-screen flex items-center justify-center p-4">
    <div class="max-w-4xl mx-auto text-white">
        <h1 class="text-5xl font-bold text-center mb-20">
            THE WOOD WE<br/>WORK WITH
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
          
            <div class="wood-card flex flex-col items-center">
                <div class="rounded-3xl overflow-hidden w-40 h-40 mb-4">
                    <img src={wood1} alt="Oak wood texture" class="object-cover w-full h-full"/>
                </div>
                <h2 class="text-xl font-semibold mb-4">Oak</h2>
                <ul class="space-y-2">
                    <li class="flex items-center">
                        <span class="text-amber-400 mr-2">✓</span> Durability
                    </li>
                    <li class="flex items-center">
                        <span class="text-amber-400 mr-2">✓</span> Beautiful texture
                    </li>
                    <li class="flex items-center">
                        <span class="text-amber-400 mr-2">✓</span> Water resistance
                    </li>
                    <li class="flex items-center">
                        <span class="text-red-500 mr-2">✕</span> Expensive
                    </li>
                </ul>
            </div>
            
           
            <div class="wood-card flex flex-col items-center">
                <div class="rounded-3xl overflow-hidden w-40 h-40 mb-4">
                    <img src={wood2} alt="Buk wood texture" class="object-cover w-full h-full"/>
                </div>
                <h2 class="text-xl font-semibold mb-4">Buk</h2>
                <ul class="space-y-2">
                    <li class="flex items-center">
                        <span class="text-amber-400 mr-2">✓</span> Durability
                    </li>
                    <li class="flex items-center">
                        <span class="text-red-500 mr-2">✕</span> Hard to handle
                    </li>
                </ul>
            </div>
            
            
            <div class="wood-card flex flex-col items-center">
                <div class="rounded-3xl overflow-hidden w-40 h-40 mb-4">
                    <img src={wood3} alt="Ash wood texture" class="object-cover w-full h-full"/>
                </div>
                <h2 class="text-xl font-semibold mb-4">Ash</h2>
                <ul class="space-y-2">
                    <li class="flex items-center">
                        <span class="text-amber-400 mr-2">✓</span> Durability
                    </li>
                    <li class="flex items-center">
                        <span class="text-red-500 mr-2">✕</span> Hard to handle
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    );
};

export default WoodWeWorkWith;
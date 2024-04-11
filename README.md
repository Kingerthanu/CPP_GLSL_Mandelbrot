# CPP_GLSL_Mandelbrot
Another C++ OpenGL project (yippe!!). This time I put heavy focus on the shaders to get a real understanding of how GLSL works around a window and how we can interpolate a given canvas. I also wanted to understand better how the CPU and GPU can communicate with eachother through uniforms so I tried messing around with
dependency injection through uniforms for glsl. This is more a proof of concept and am gonna probably now go check how to optimize this better (watch out as this is already kind of melting a 3080's processing power) as I feel like we have room for improvement as it seems we are calculating too much fidelity on some larger scenes
even though we only really can see about half those detailed calculations.

<img src="https://github.com/Kingerthanu/CPP_GLSL_Mandelbrot/assets/76754592/2c3dc82b-b7ac-4518-94fc-a4c43d018370" alt="Cornstarch <3" width="95" height="119">

This project taught me a lot about how GLSL works around given pixels of a screen. It helped show me usages for triangle fan as well as how we still need some sort of indexes in order to properly tell GLSL that this is our canvas in which it can draw on as rest will be covered with our clearColor buffers which work as a backdrop.
Some of the given .gifs will also be changing around some variables in our .frag function to tell where we will focus onto through our zoom. This project also isn't including our include folder as we are using the same one as before in my cellular automata (https://github.com/Kingerthanu/CPP_CellularAutomata_stage1).


----------------------------------------------
<img src="https://github.com/Kingerthanu/CPP_CellularAutomata_pt2_Synapses/assets/76754592/b8f1331f-644d-4b71-826e-2f24b4439292" alt="Cornstarch <3" width="55" height="49"><img src="https://github.com/Kingerthanu/CPP_CellularAutomata_pt2_Synapses/assets/76754592/b8f1331f-644d-4b71-826e-2f24b4439292" alt="Cornstarch <3" width="55" height="49"><img src="https://github.com/Kingerthanu/CPP_CellularAutomata_pt2_Synapses/assets/76754592/b8f1331f-644d-4b71-826e-2f24b4439292" alt="Cornstarch <3" width="55" height="49"><img src="https://github.com/Kingerthanu/CPP_CellularAutomata_pt2_Synapses/assets/76754592/b8f1331f-644d-4b71-826e-2f24b4439292" alt="Cornstarch <3" width="55" height="49">


**The Breakdown:**



----------------------------------------------


**Features:**

**Demo 1:**

![2024-01-3120-12-50-Trim-ezgif com-optimize (3)](https://github.com/Kingerthanu/CPP_GLSL_Mandelbrot/assets/76754592/678e7a2c-74a4-4402-8124-d12ad35ed8e3)
<img width="785" alt="image" src="https://github.com/Kingerthanu/CPP_GLSL_Mandelbrot/assets/76754592/e6fbdce2-cf05-4b42-a365-2be7346f5475">
<img width="656" alt="image" src="https://github.com/Kingerthanu/CPP_GLSL_Mandelbrot/assets/76754592/8ccc6d9c-4c0d-4d7e-b280-4bb9ec6b61d1">

**Demo 2:**

![nutTrim-ezgif com-optimize (3)](https://github.com/Kingerthanu/CPP_GLSL_Mandelbrot/assets/76754592/9ae5ec1b-c52a-4df3-8c74-3a4a46a47f16)

**Demo 3 (Changed Color in Hash13()):**
<img width="838" alt="image" src="https://github.com/Kingerthanu/CPP_GLSL_Mandelbrot/assets/76754592/c0d97b6b-3501-4f28-a3a1-70055e96d7ee">

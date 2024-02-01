#version 330 core

out vec4 FragColor;

uniform vec2 centerOffset;
uniform float bloatScale;
uniform float time;

float mandelbrot(vec2 uv)
{
    vec2 c = (uv + centerOffset) / bloatScale;
    c = c / pow(time, 1.0) + vec2(0.35929, 0.42552);

    vec2 z = vec2(0.0, 0.0);
    int iteration = 0;
    const int maxIterations = 35000;

    for (int i = 0; i < maxIterations; ++i) {
        float zx = z.x * z.x - z.y * z.y + c.x;
        float zy = 2.0 * z.x * z.y + c.y;
        z = vec2(zx, zy);

        if (zx * zx + zy * zy > 4.0)
            return float(i) / float(maxIterations);
    }

    return 0.0;
}

vec3 hash13(float m)
{
    float x = fract(sin(m) * 1625.246);
    float y = fract(sin(m + x) * 0.986);
    float z = fract(sin(m + y) * 0.7952);

    return vec3(x, y, z);
}

void main()
{
    vec2 uv = ((gl_FragCoord.xy - 0.5 * vec2(1800, 1800)) / 1800.0);
    vec3 color = vec3(0.0);

    float m = mandelbrot(uv);

    color += hash13(m);

    FragColor = vec4(color, 1.0);
}

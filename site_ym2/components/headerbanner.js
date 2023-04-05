import { ParallaxBanner } from 'react-scroll-parallax'; 

export const HeaderBanner = () => {
    return (
        <ParallaxBanner
          layers={[
            { image: '../public/img/BG-background.jpg', speed: -20 },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                </div>
              ),
            },
            { image: '../public/img/BG-foreground.png', speed: -10 },
          ]}
          className="aspect-[2/1]"
        />
      );
};
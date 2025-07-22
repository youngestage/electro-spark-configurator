import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";

// Replace these with your actual Google Drive embed links
const demoVideos = [
  {
    title: "Demo Video 1",
    url: "https://drive.google.com/file/d/1hgjT0ik38Q_AsWxhsMcwjZDumhorRT3F/preview"
  },
  {
    title: "Demo Video 2",
    url: "https://drive.google.com/file/d/1ci7NPdmNn-xBorthMN7o58WISvQFi4Rh/preview"
  }
];

const DemoVideosSection: React.FC = () => {
  return (
    <section className="my-12">
      <h2 className="text-4xl text-center font-bold mb-4 text-brand-accent">Demo Videos</h2>
      <Carousel className="relative max-w-xl mx-auto">
        <CarouselContent>
          {demoVideos.map((video, idx) => (
            <CarouselItem key={idx} className="flex justify-center items-center">
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
                {/* Google Drive video embed */}
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        Swipe.
      </p>
    </section>
  );
};

export default DemoVideosSection; 
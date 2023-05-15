'use client';
import TopBar from '@/app/Components/NewWindow/TopBar';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';
import { Rnd } from 'react-rnd';
import { useParams } from 'next/navigation';
import ExecutableContent from '@/app/Components/Executable/ExecutableContent/ExecutableContent';
type Props = {
  children?: React.ReactNode;
  folderName?: string;
  windowData?: any;
};

// const content = `
// "\n<p>ASDASDASD</p>\n\n\n\n<p>asdasDASDASDASd</p>\n\n\n\n<p>asdasda</p>\n\n\n\n<p>sd</p>\n\n\n\n<p>asd</p>\n\n\n\n<figure class=\"wp-block-image size-full\"><img decoding=\"async\" loading=\"lazy\" width=\"768\" height=\"768\" src=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Tauro-Pisos-1-768x768-1.jpg\" alt=\"\" class=\"wp-image-21\" srcset=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Tauro-Pisos-1-768x768-1.jpg 768w, http://localhost:8888/project-1/wp-content/uploads/2023/04/Tauro-Pisos-1-768x768-1-300x300.jpg 300w, http://localhost:8888/project-1/wp-content/uploads/2023/04/Tauro-Pisos-1-768x768-1-150x150.jpg 150w\" sizes=\"(max-width: 768px) 100vw, 768px\" /></figure>\n\n\n\n<p>as</p>\n\n\n\n<p>dasdasdasdasdasdasd</p>\n\n\n\n<div class=\"wp-block-group is-content-justification-left is-nowrap is-layout-flex wp-container-1\">\n<figure class=\"wp-block-image size-full\"><img decoding=\"async\" loading=\"lazy\" width=\"768\" height=\"768\" src=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/WhatsApp-Image-2021-06-30-at-18.33.13-768x768-1.jpeg\" alt=\"\" class=\"wp-image-23\" srcset=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/WhatsApp-Image-2021-06-30-at-18.33.13-768x768-1.jpeg 768w, http://localhost:8888/project-1/wp-content/uploads/2023/04/WhatsApp-Image-2021-06-30-at-18.33.13-768x768-1-300x300.jpeg 300w, http://localhost:8888/project-1/wp-content/uploads/2023/04/WhatsApp-Image-2021-06-30-at-18.33.13-768x768-1-150x150.jpeg 150w\" sizes=\"(max-width: 768px) 100vw, 768px\" /></figure>\n\n\n\n<p>TEXTO DE AL ALADO</p>\n</div>\n\n\n\n<h2 class=\"wp-block-heading\">ENCABEZADO &#8220;2&#8221;</h2>\n\n\n\n<figure class=\"wp-block-gallery has-nested-images columns-default is-cropped wp-block-gallery-2 is-layout-flex\">\n<figure class=\"wp-block-image size-large\"><img decoding=\"async\" loading=\"lazy\" width=\"768\" height=\"768\" data-id=\"23\"  src=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/WhatsApp-Image-2021-06-30-at-18.33.13-768x768-1.jpeg\" alt=\"\" class=\"wp-image-23\" srcset=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/WhatsApp-Image-2021-06-30-at-18.33.13-768x768-1.jpeg 768w, http://localhost:8888/project-1/wp-content/uploads/2023/04/WhatsApp-Image-2021-06-30-at-18.33.13-768x768-1-300x300.jpeg 300w, http://localhost:8888/project-1/wp-content/uploads/2023/04/WhatsApp-Image-2021-06-30-at-18.33.13-768x768-1-150x150.jpeg 150w\" sizes=\"(max-width: 768px) 100vw, 768px\" /><figcaption class=\"wp-element-caption\">1</figcaption></figure>\n\n\n\n<figure class=\"wp-block-image size-large\"><img decoding=\"async\" loading=\"lazy\" width=\"768\" height=\"171\" data-id=\"22\"  src=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Isologo-01-e1645719246653-768x171-2.png\" alt=\"\" class=\"wp-image-22\" srcset=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Isologo-01-e1645719246653-768x171-2.png 768w, http://localhost:8888/project-1/wp-content/uploads/2023/04/Isologo-01-e1645719246653-768x171-2-300x67.png 300w\" sizes=\"(max-width: 768px) 100vw, 768px\" /><figcaption class=\"wp-element-caption\">os</figcaption></figure>\n\n\n\n<figure class=\"wp-block-image size-large\"><img decoding=\"async\" loading=\"lazy\" width=\"768\" height=\"768\" data-id=\"21\"  src=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Tauro-Pisos-1-768x768-1.jpg\" alt=\"\" class=\"wp-image-21\" srcset=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Tauro-Pisos-1-768x768-1.jpg 768w, http://localhost:8888/project-1/wp-content/uploads/2023/04/Tauro-Pisos-1-768x768-1-300x300.jpg 300w, http://localhost:8888/project-1/wp-content/uploads/2023/04/Tauro-Pisos-1-768x768-1-150x150.jpg 150w\" sizes=\"(max-width: 768px) 100vw, 768px\" /><figcaption class=\"wp-element-caption\">tres</figcaption></figure>\n\n\n\n<figure class=\"wp-block-image size-large\"><img decoding=\"async\" loading=\"lazy\" width=\"768\" height=\"768\" data-id=\"14\"  src=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/caspen-garden-768x768-1.jpg\" alt=\"\" class=\"wp-image-14\" srcset=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/caspen-garden-768x768-1.jpg 768w, http://localhost:8888/project-1/wp-content/uploads/2023/04/caspen-garden-768x768-1-300x300.jpg 300w, http://localhost:8888/project-1/wp-content/uploads/2023/04/caspen-garden-768x768-1-150x150.jpg 150w\" sizes=\"(max-width: 768px) 100vw, 768px\" /><figcaption class=\"wp-element-caption\">55555</figcaption></figure>\n\n\n\n<figure class=\"wp-block-image size-large\"><img decoding=\"async\" loading=\"lazy\" width=\"731\" height=\"182\" data-id=\"13\"  src=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Wet4Fun_Logo_01-5-e1645719306287.png\" alt=\"\" class=\"wp-image-13\" srcset=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Wet4Fun_Logo_01-5-e1645719306287.png 731w, http://localhost:8888/project-1/wp-content/uploads/2023/04/Wet4Fun_Logo_01-5-e1645719306287-300x75.png 300w\" sizes=\"(max-width: 731px) 100vw, 731px\" /><figcaption class=\"wp-element-caption\">666666</figcaption></figure>\n\n\n\n<figure class=\"wp-block-image size-large\"><img decoding=\"async\" loading=\"lazy\" width=\"768\" height=\"171\" data-id=\"12\"  src=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Isologo-01-e1645719246653-768x171-1.png\" alt=\"\" class=\"wp-image-12\" srcset=\"http://localhost:8888/project-1/wp-content/uploads/2023/04/Isologo-01-e1645719246653-768x171-1.png 768w, http://localhost:8888/project-1/wp-content/uploads/2023/04/Isologo-01-e1645719246653-768x171-1-300x67.png 300w\" sizes=\"(max-width: 768px) 100vw, 768px\" /><figcaption class=\"wp-element-caption\">asdasd</figcaption></figure>\n</figure>\n\n\n\n<div class=\"wp-block-group alignwide is-vertical is-layout-flex wp-container-4\">\n<p>TEsxto</p>\n</div>\n\n\n\n<div class=\"wp-block-group is-nowrap is-layout-flex wp-container-10\">\n<div class=\"wp-block-group is-vertical is-layout-flex wp-container-5\">\n<p>asdasaaaaaaaaaaaaaaaaaaaaaaaaaaad</p>\n</div>\n\n\n\n<div class=\"wp-block-columns is-layout-flex wp-container-9\">\n<div class=\"wp-block-column is-layout-flow\">\n<p>UNO</p>\n</div>\n\n\n\n<div class=\"wp-block-column is-layout-flow\">\n<p>DOS</p>\n</div>\n\n\n\n<div class=\"wp-block-column is-layout-flow\">\n<p>TRES</p>\n</div>\n</div>\n</div>\n"
// `;
const Window = ({ windowData }: Props) => {
  const [size, setSize] = useState({ width: 800, height: 400 });
  let params = useParams();
  return (
    <Rnd
      style={{
        position: 'absolute',
      }}
      size={{ width: size.width, height: size.height }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
    >
      <div
        className={`min-w-full h-full overflow-hidden bg-neutral-100  select-none  flex flex-col`}
      >
        {/* TOP BAR */}
        <TopBar backBtn folderName={params.slug} />
        <ExecutableContent windowData={windowData} />
      </div>
    </Rnd>
  );
};

export default Window;

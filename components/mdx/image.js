import Image from "next/image";

export default function PostImage({ alt, caption, ...props }) {
  return (
    <figure>
      <Image className="w-full rounded" {...props} alt={alt} />
      {caption && (
        <figcaption className="text-sm text-center text-gray-500 mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

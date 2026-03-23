import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

export const Card = ({
  src,
  alt,
  color,
  type = "",
  reveal = true,
  text = "View Project",
  label,
}: {
  src: StaticImageData | string
  alt: string
  color?: string
  type?: string
  reveal?: boolean
  text?: string
  label?: string
}) => {
  return (
    <div
      className={`relative aspect-[108/69] w-full overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:z-10 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_var(--color-gradient,rgba(0,0,0,0.5))] [&_span]:transition-opacity [&_span]:duration-400 ${reveal ? "reveal-false:[&_span]:opacity-0" : "group relative"}`}
      style={{ "--color-gradient": color } as React.CSSProperties}
    >
      <div className="h-full w-full scale-[1.05] text-white transition-transform duration-700 ease-out group-hover:scale-110">
        <span
          className={clsx(
            "absolute inset-0 overflow-hidden rounded-2xl opacity-90 contain-strict group-hover:opacity-0 after:absolute after:inset-0 after:z-4 after:rounded-2xl after:duration-200 after:content-['']"
          )}
          style={
            { "--color-gradient": color, background: "linear-gradient(to top, var(--color-gradient), #00000056 25%, transparent 50%)" } as React.CSSProperties
          }
        >
          <span className="absolute top-2 left-2 w-fit rounded-full border border-gray-700 bg-black px-4 py-2 text-xs shadow-md transition-transform duration-500 ease-out group-hover:drop-shadow-2xl">{type}</span>
          <span className="absolute bottom-4 left-4 z-5 w-fit text-lg font-bold drop-shadow-md">{label || alt.split(" ")[0]}</span>
          <span className="absolute right-4 bottom-4 z-5 flex w-fit items-center gap-1 text-xs drop-shadow-md">
            {/* SVG inlined for performance */}
            <svg className="h-4 w-4" height="16" width="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
            </svg>
            {text}
          </span>
        </span>
        {typeof src === 'string' ? (
          <Image className="absolute inset-0 h-full w-full object-cover object-center bg-zinc-950 transition-colors duration-300" src={src} alt={alt} priority decoding="async" width={1080} height={690} fill />
        ) : (
          <Image className="absolute inset-0 h-full w-full object-cover object-center bg-zinc-950 transition-colors duration-300" src={src} alt={alt} priority decoding="async" fill sizes="(max-width: 768px) 100vw, 50vw" />
        )}
      </div>
    </div>
  )
}

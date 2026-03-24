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
            "absolute inset-x-0 bottom-0 top-1/3 flex items-end overflow-hidden p-5 md:p-8 rounded-b-2xl opacity-100 z-10"
          )}
          style={
            { background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)" } as React.CSSProperties
          }
        >
          <span className="z-5 w-full text-xl md:text-2xl leading-tight font-bold tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)] group-hover:scale-[1.02] transition-transform duration-300 origin-bottom-left">
            {label || alt.split(" ")[0]}
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

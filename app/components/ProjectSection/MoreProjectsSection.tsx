import { HeaderText } from "@/app/ui/HeaderText"
import { Card } from "../ProjectCard/Card"
import { Typography } from "@/app/ui/Elements"
import { Icon } from "../Icon"
import { Link } from "@/app/utils/Link"
import { ZeroUICarousel } from "../Carousel/Carousel"
import { STATIC_PROJECTS } from "@/app/data/projects-static"

export const MoreProjectsSection = () => {
  return (
    <section className="inside-container relative z-2">
      <HeaderText title="More Projects" />

      <ZeroUICarousel xlSlidesToShow={2} slidesToShow={2} mobileSlidesToShow={1} gap={24} autoplay={3000} className="mb-11 h-full w-full text-black">
        <div className="relative h-full w-full">
          <div className="card-image flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] opacity-90 transition-all duration-500 will-change-transform group-hover:after:opacity-0 md:rounded-3xl">
            <div className="rounded-lg bg-gray-300 dark:bg-zinc-800 p-5 transition-colors duration-300">
              <Icon name="plus" className="h-5 w-5 fill-white text-white" />
            </div>{" "}
            <Typography className="mt-5 max-w-xs text-center dark:text-gray-300 transition-colors duration-300" as="p">
              Got a cool idea? This spot is waiting for your success story.
            </Typography>
          </div>
        </div>
        {STATIC_PROJECTS.map((project) => {
          const ProjectWrapper = project.isExternal ? "a" : Link
          const wrapperProps = project.isExternal
            ? {
                href: project.href,
                target: "_blank",
                rel: "noopener",
                "data-text": project.dataText,
                "aria-label": project.ariaLabel,
              }
            : {
                href: project.href,
                "data-text": project.dataText,
                "aria-label": project.ariaLabel,
                prefetch: true,
              }

          return (
            <ProjectWrapper key={project.id} {...wrapperProps}>
              <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
            </ProjectWrapper>
          )
        })}
      </ZeroUICarousel>
    </section>
  )
}

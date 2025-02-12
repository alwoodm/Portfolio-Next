import Image from 'next/image'
import { getProjectBySlug, projects } from '../../data/projects'
import Link from 'next/link'
import { Metadata } from 'next'
import { ProjectPageProps } from '../../types'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug)
  return {
    title: project ? `${project.title} - Portfolio` : 'Projekt nie znaleziony',
    description: project?.description || 'Opis projektu',
    openGraph: {
      title: project ? `${project.title} - Portfolio` : 'Projekt nie znaleziony',
      description: project?.description || 'Opis projektu',
      type: 'article',
      images: project?.image ? [{ url: project.image }] : [],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" role="alert">
          <h1 className="text-2xl font-bold mb-4">Projekt nie został znaleziony</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-500">
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Nawigacja">
            <Link 
              href="/" 
              className="inline-block mb-8 text-blue-400 hover:text-blue-500"
            >
              ← Wróć do strony głównej
            </Link>
          </nav>
          
          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[400px] w-full">
              <Image
                src={project.image}
                alt={`Zdjęcie projektu ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
                className="object-cover"
              />
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-blue-400">O projekcie</h2>
                <p className="text-gray-300 whitespace-pre-line">{project.fullDescription}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-blue-400">Funkcjonalności</h2>
                <ul className="list-disc list-inside space-y-2" role="list">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-300">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-blue-400">Technologie</h2>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Użyte technologie">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      role="listitem"
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  aria-label={`Zobacz kod projektu ${project.title} na GitHub`}
                >
                  Zobacz kod
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                  aria-label={`Zobacz demo projektu ${project.title}`}
                >
                  Zobacz demo
                </a>
              </div>
            </div>
          </div>
          
          <section className="mt-12" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="text-2xl font-bold mb-6 text-blue-400">Galeria</h2>
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              role="group"
              aria-label="Galeria zdjęć projektu"
            >
              {project.gallery.map((image, index) => (
                <div key={index} className="relative h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} - zdjęcie ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
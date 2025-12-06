import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import PageTitle from '../components/PageTitle'
import SingleProject from '../components/SingleProject'
import { PreviousWork } from '../types'
import previousWork from '../db/previousWork.json'
import Loading from '../components/Loading'

export const Route = createFileRoute('/previous-work')({
  component: PreviousWorkPage,
  meta: () => [
    {
      title: 'Previous Work | Peter Tumulty Senior Software Engineer',
    },
    {
      name: 'description',
      content: 'I provide a variety of different digital services, so you can focus on your customers, clients, and business operations.',
    },
  ],
})

export default PreviousWorkPage

function PreviousWorkPage() {
  return (
    <div>
      <div className="text-center py-6">
        <PageTitle title="Previous Work" />
      </div>
      <div className="flex flex-col mx-auto lg:mx-0 lg:flex-row lg:flex-wrap w-full justify-center items-center max-w-screen-lg">
        <Suspense fallback={<Loading />}>
          {previousWork
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((project: PreviousWork) => (
              <SingleProject project={project} key={project.label} />
            ))}
        </Suspense>
      </div>
    </div>
  )
}

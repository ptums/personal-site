import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import PageAnimationLayout from '../components/PageAnimationLayout'
import { Link } from '../types/Link'
import { CONTACTS, RECENT_STACK } from '../utils/constants'
import Introduction from '../components/Introduction'
import Loading from '../components/Loading'

export const Route = createFileRoute('/')({
  component: Home,
})

export default Home

RECENT_STACK.sort()
const colOne = RECENT_STACK.length / 3 + 1
const colTwo = RECENT_STACK.length / 6 + 1

const chunkSize = Math.ceil(RECENT_STACK.length / 3)
const list1 = RECENT_STACK.slice(0, chunkSize)
const list2 = RECENT_STACK.slice(chunkSize, chunkSize * 2)
const list3 = RECENT_STACK.slice(chunkSize * 2)

function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center lg:flex-row lg:justify-between mx-auto w-full max-w-4xl	my-2 lg:my-20 lg:items-start"
      style={{ minHeight: "80vh" }}
    >
      <Suspense fallback={<Loading />}>
        <div className="lg:w-2/5 my-4 lg:mb-0 lg:mt-1">
          <PageAnimationLayout duration={1.2} delay={0}>
            <img
              src="/images/peter-2023.webp"
              alt="Peter Tumulty"
              width={512}
              height={512}
              className="shadow-lg rounded-sm"
            />
          </PageAnimationLayout>
        </div>
        <div className="sm:ml-8 sm:w-3/5">
          <PageAnimationLayout duration={1.2} delay={0.5}>
            <Introduction />
          </PageAnimationLayout>
          <PageAnimationLayout duration={1.2} delay={1}>
            <div className="bg-white border rounded p-4 mb-8 shadow-sm">
              <p className="font-semibold text-lg text-emerald-800">
                Connect with me
              </p>
              <ul className="mt-2 flex flex-col sm:flex-row">
                {CONTACTS.map((contact: Link) => (
                  <li key={contact?.id}>
                    <a
                      className="text-emerald-800 mr-4 text-sm underline my-2 block sm:inline sm:my-0"
                      href={contact?.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border rounded p-4 shadow-sm">
              <p className="font-semibold text-lg text-emerald-800 mb-2">
                A few technologies I&apos;ve been working with recently
              </p>
              <div className="flex flex-col sm:flex-row">
                <ul className="mt-2 flex flex-col w-full sm:w-52">
                  {list1.map((stack: string) => (
                    <li
                      key={stack}
                      className="text-emerald-800 mr-4 text-sm mb-2"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
                <ul className="sm:mt-2 flex flex-col  sm:w-52">
                  {list2.map((stack: string) => (
                    <li
                      key={stack}
                      className="text-emerald-800 mr-4 text-sm mb-2"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
                <ul className="sm:mt-2 flex flex-col">
                  {list3.map((stack: string) => (
                    <li
                      key={stack}
                      className="text-emerald-800 mr-4 text-sm mb-2"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PageAnimationLayout>
        </div>
      </Suspense>
    </div>
  )
}

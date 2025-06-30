import Image from 'next/image'
import ImgAward1 from '/public/award-1.svg'
import { CheckIcon } from 'lucide-react'

const tiers = [
  {
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '+ de 2500 projetos',
    features: ['+ 10 anos de experiência', '+ de 290 clientes atendidos', '+ 30 franquias espalhadas pelo Brasil'],
    featured: false
  },
  {
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Marketing de resultado',
    description:
      'A SparkVibe possui diversas franquias espalhadas pelo Brasil, oferecendo estratégias de marketing focadas em resultados concretos e mensuráveis.',
    features: [
      'Finalista por 5 anos consecutivos RD Summit',
      'Prêmio Digitalks',
      'Advanced analytics',
      'Content Marketing Awards',
      'Social Media Marketing Awards'
    ],
    featured: true
  }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export function Differences() {
  return (
    <div className="relative isolate bg-gradient-to-tr from-[#1C1D1F]/40 to-[#1C1D1F]/60 px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2  font-semibold tracking-tight text-balance text-gray-900 title-section-2">
          Alguns diferenciais da SparkVibe
        </p>
      </div>
      {/* <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p> */}
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative bg-zinc-50 shadow-2xl'
                : 'bg-gradient-to-r from-primary-300 to-primary-100 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8  sm:p-10'
            )}
          >
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-primary-300' : 'text-white',
                  'text-5xl font-semibold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
            </p>

            <p className={classNames(tier.featured ? 'text-zinc-500' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-zinc-500' : 'text-white',
                'mt-8 space-y-3 text-sm/6 sm:mt-10'
              )}
            >
              {tier.features.map(feature => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-primary-300' : 'text-white', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-12">{tier.featured && <Image src={ImgAward1} alt="" className="w-24" />}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

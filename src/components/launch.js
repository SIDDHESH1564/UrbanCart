import { Link } from "react-router-dom";

const callouts = [
  {
    name: 'Saree',
    imageAlt: 'https://1.bp.blogspot.com/-xX-j6beBbmo/XticzLxP3tI/AAAAAAAAC2s/pI7-5czbzDsRu4SguQ67Ml2pg618FG4TgCK4BGAsYHg/s1350/thumb.png',
    imageSrc: 'https://i.pinimg.com/originals/80/e7/bc/80e7bca43b46fd42da51525cd44c6030.jpg',
    href: '/shop/sarees',
  },
  {
    name: 'T-Shirt',
    imageSrc: 'https://i.pinimg.com/originals/3a/92/b9/3a92b9786b81cfa2a10efcbfccb63e19.jpg',
    imageAlt: 'https://i.pinimg.com/originals/c1/f7/75/c1f77582678c416159668c84a0540f05.jpg',
    href: '/shop/tshirts',
  },
  {
    name: 'Western Dresses',
    imageSrc: 'https://i.pinimg.com/736x/cb/cf/0c/cbcf0c302380546314ad65bf281762a6.jpg',
    imageAlt: 'https://i.pinimg.com/originals/98/e9/a3/98e9a3b7e3dc0dd6a6d113b4ac486266.jpg',
    href: '/shop/westerndresses',
  },
];


export default function Launch() {
  return (

    <>
      <div>
        <div className="relative overflow-hidden bg-gray-200">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Summer styles are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                  if you live or die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-84 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://cdn.dribbble.com/users/453417/screenshots/5427288/t-shirt-mockup-1.jpg"
                              alt=""
                              className="h-full w-full object-contain object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto py-16 sm:py-24 lg:max-w-none lg:py-32">
            {/* <h2 className="text-2xl font-bold text-gray-900">Collections</h2> */}
            <div className="mt-6 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <Link to={callout.href}>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="absolute w-full h-200 object-cover object-center" />
                    </div>
                    <p className="text-base font-semibold text-gray-900 mt-2">{callout.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

import Image from 'next/image'

export default function Index() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1680356176253-ce6663fdf847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcCUyMEZvcm1lbnRvciUyMGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        width={1024}
        height={0}
        quality={60}
        alt="A dog"
      />
    </>
  )
}

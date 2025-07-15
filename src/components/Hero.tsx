import Image from 'next/image'
import SidebarIntro from './SidebarIntro'

export default function Hero() {
  return (
    <section id="hero" className="py-4 md:py-0 px-4">
      {/* モバイル用の表示 */}
      <div className="block lg:hidden space-y-4">
        <SidebarIntro />
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image
            src="/images/HisashiKojima.JPG"
            alt="小嶋恒の写真"
            fill
            className="object-cover object-[center_20%]"
            sizes="160px"
          />
        </div>
      </div>
    </section>
  )
}

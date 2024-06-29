import Image from "next/image"
import Link from "next/link"


const Header = () => {
  return (
    <div>
        <Link href="/">
            <Image src="/tora_logo.jpg" alt="לוגו האתר" width={100} height={65} />
        </Link>
    </div>
  )
}

export default Header
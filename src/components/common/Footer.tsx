import Link from 'next/link';

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Instagram', href: '#' },
    { name: 'Behance', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#F5F6F8] border-t border-[#E0E0E0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">DASHI</h3>
            <p className="text-[#A0A0A0]">
              디자인으로 브랜드를 완성합니다
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="text-[#1E1E1E] font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#A0A0A0] hover:text-[#3449FF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-[#1E1E1E] font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-[#A0A0A0]">
              <li>contact@dashi.design</li>
              <li>서울특별시 강남구</li>
              <li>02-1234-5678</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h4 className="text-[#1E1E1E] font-medium mb-4">Social</h4>
            <ul className="space-y-2">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#A0A0A0] hover:text-[#3449FF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#E0E0E0] text-center text-[#A0A0A0]">
          <p>&copy; {new Date().getFullYear()} DASHI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
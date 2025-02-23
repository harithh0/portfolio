import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { headerNavLinks } from '~/data/headerNavLinks';
import { Link } from './Link';
import { MobileNavToggle } from './MobileNavToggle';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Header({ navShow, onToggleNav }: { onToggleNav: () => void; navShow: boolean }) {
  let { t } = useTranslation('common');
  let router = useRouter();

  return (
    <nav className="supports-backdrop-blur:bg-white/95 sticky top-0 z-50 overflow-hidden bg-white/75 py-3 backdrop-blur dark:bg-dark/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0 mt-7">
        <Link href="/" aria-label="Leo's Blog">
          <div className="flex items-center justify-between" data-umami-event="logo">
            <div className="mr-3 flex items-center justify-center">
              <NextImage
                src="/static/images/logo.jpg"
                alt="logo"
                width={65}
                height={65}
                className="rounded-full"
              />
            </div>
            <div className="glitch" data-text="Harith">Harith</div>
            <div className="glitch" data-text="Hayyawi">Hayyawi</div>

          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden space-x-1.5 sm:block">
            {headerNavLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <span
                  className={clsx(
                    'inline-block rounded px-3 py-1 font-medium',
                    router.pathname.startsWith(href)
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  )}
                  data-umami-event={`nav-${href.replace('/', '')}`}
                >
                  {t(label)}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <ThemeSwitcher />
            <MobileNavToggle navShow={navShow} onToggleNav={onToggleNav} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .glitch {
          position: relative;
          color: white;
          font-size: 20px;
          margin: 0 auto;
          width: 60px;
        }

        .glitch::after,
        .glitch::before {
          position: absolute;
          color: white;
          content: attr(data-text);
          left: 2px;
          top: 0;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }

        .glitch::after {
          animation: glitch-animation 1s infinite linear alternate-reverse;
          text-shadow: -1px 0 red;
        }

        .glitch::before {
          animation: glitch-animation-2 20s infinite linear alternate-reverse;
          text-shadow: 1px 0 blue;
        }

        @keyframes glitch-animation {
          0% { clip: rect(42px, 9999px, 44px, 0); }
          5% { clip: rect(12px, 9999px, 59px, 0); }
          10% { clip: rect(48px, 9999px, 29px, 0); }
          15% { clip: rect(42px, 9999px, 73px, 0); }
          20% { clip: rect(63px, 9999px, 27px, 0); }
          25% { clip: rect(34px, 9999px, 55px, 0); }
          30% { clip: rect(86px, 9999px, 73px, 0); }
          35% { clip: rect(20px, 9999px, 20px, 0); }
          40% { clip: rect(26px, 9999px, 60px, 0); }
          45% { clip: rect(25px, 9999px, 66px, 0); }
          50% { clip: rect(57px, 9999px, 98px, 0); }
          55% { clip: rect(5px, 9999px, 46px, 0); }
          60% { clip: rect(82px, 9999px, 31px, 0); }
          65% { clip: rect(54px, 9999px, 27px, 0); }
          70% { clip: rect(28px, 9999px, 99px, 0); }
          75% { clip: rect(45px, 9999px, 69px, 0); }
          80% { clip: rect(23px, 9999px, 85px, 0); }
          85% { clip: rect(54px, 9999px, 84px, 0); }
          90% { clip: rect(45px, 9999px, 47px, 0); }
          95% { clip: rect(37px, 9999px, 20px, 0); }
          100% { clip: rect(4px, 9999px, 91px, 0); }
        }

        @keyframes glitch-animation-2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          5% { clip: rect(52px, 9999px, 74px, 0); }
          10% { clip: rect(79px, 9999px, 85px, 0); }
          15% { clip: rect(75px, 9999px, 5px, 0); }
          20% { clip: rect(67px, 9999px, 61px, 0); }
          25% { clip: rect(14px, 9999px, 79px, 0); }
          30% { clip: rect(1px, 9999px, 66px, 0); }
          35% { clip: rect(86px, 9999px, 30px, 0); }
          40% { clip: rect(23px, 9999px, 98px, 0); }
          45% { clip: rect(85px, 9999px, 72px, 0); }
          50% { clip: rect(71px, 9999px, 75px, 0); }
          55% { clip: rect(2px, 9999px, 48px, 0); }
          60% { clip: rect(30px, 9999px, 16px, 0); }
          65% { clip: rect(59px, 9999px, 50px, 0); }
          70% { clip: rect(41px, 9999px, 62px, 0); }
          75% { clip: rect(2px, 9999px, 82px, 0); }
          80% { clip: rect(47px, 9999px, 73px, 0); }
          85% { clip: rect(3px, 9999px, 27px, 0); }
          90% { clip: rect(26px, 9999px, 55px, 0); }
          95% { clip: rect(42px, 9999px, 97px, 0); }
          100% { clip: rect(38px, 9999px, 49px, 0); }
        }
      `}</style>
    </nav>
  );
}

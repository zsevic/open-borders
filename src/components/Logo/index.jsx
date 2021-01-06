import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="d-flex justify-content-center mt-2">
      <Link href="/">
        <a style={{ cursor: 'pointer' }} id="logo">
          <Image
            src="/assets/logo-main.png"
            width="190"
            height="100"
            alt="logo"
          />
        </a>
      </Link>
    </div>
  );
}

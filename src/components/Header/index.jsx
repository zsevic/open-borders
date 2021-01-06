import React from 'react';
import Logo from 'components/Logo';

export default function Header() {
  return (
    <header>
      <Logo />
      <p className="text-center text-muted w-75 mx-auto">
        Brzo i jednostavno saznajte za ulazak u koje zemlje vam je potreban
        negativan PCR test, da li je obavezan karantin po ulasku ili možete da
        putujete bez ikakvih ograničenja. Zemlje su grupisane na osnovu
        zvaničnih podataka. Ukoliko imate komentar ili predlog, možete da
        pošaljete e-mail na{' '}
        <a href="mailto:info@otvorene-granice.com" className="text-info">
          info@otvorene-granice.com
        </a>
      </p>
    </header>
  );
}

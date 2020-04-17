import React from 'react';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Content = () => (
  <>
    <div className="content">
      <h1 id="about">I Use Btw Arch Linux</h1>
      <p>
        <code>Arch Linux</code> (dikenal juga dengan ArchLinux atau Arch) adalah sebuah distribusi Linux untuk komputer x86_64 (64 bit) yang didesain untuk menjadi ringan dan sederhana.[3] Cara pengucapan Arch Linux adalah [ɑːrtʃ] atau [aːtʃ] (seperti pada kata archer atau parchment).[4] 
      </p>
      <p>
        <code>Arch Linux</code> (dikenal juga dengan ArchLinux atau Arch) adalah sebuah distribusi Linux untuk komputer x86_64 (64 bit) yang didesain untuk menjadi ringan dan sederhana.[3] Cara pengucapan Arch Linux adalah [ɑːrtʃ] atau [aːtʃ] (seperti pada kata archer atau parchment).[4] 
      </p>
      <p>
        <code>Arch Linux</code> (dikenal juga dengan ArchLinux atau Arch) adalah sebuah distribusi Linux untuk komputer x86_64 (64 bit) yang didesain untuk menjadi ringan dan sederhana.[3] Cara pengucapan Arch Linux adalah [ɑːrtʃ] atau [aːtʃ] (seperti pada kata archer atau parchment).[4] 
      </p>
      <p>It couldn't be any easier!</p>
      <p>
        <img
          alt="code"
          src="https://i.imgur.com/lpGL0aL.png"
        />
      </p>
    </div>
  </>
);

export default Content;

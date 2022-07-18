import { useState } from 'react';

export const Navbar = () => {
  const [bookActive, setBookActive] = useState(true);

  return (
    <nav className="container mx-auto">
      <div className="flex justify-center">
        <h1 className="text-5xl mt-5">Book web app</h1>
      </div>
      <div className="flex h-2/7">
        <div className="h-15/100 w-15/100">
          <img
            src={
              bookActive
                ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAe1BMVEX///8AAACRkZG5ubng4OBcXFwdHR3Q0NAqKirw8PDGxsbl5eXo6OjCwsL5+fn8/PykpKSbm5uxsbFiYmKAgIDZ2dmrq6vu7u59fX2NjY3T09NHR0dBQUGenp5nZ2c3NzcSEhJTU1N0dHQ7OztMTEwYGBgsLCwjIyMLCwvq6l4cAAAJSElEQVR4nO2d22KqOhBAVaAICnIXRFDQqv//hQetuxpNQi6jpaezXqVOlpCQSdJkNBLHSW3Xi4KwI8giw3Nt05f489+Gv7SjIl6P6XyUdRHZzpvLtHCc1Iuyoo2tZl+ud+ty31hxmxeZYc8BCuN4RckQftDfF5GpH0+gRKYR1rstvzBlHXo6j+JEyPlGE67ABCmssnwqXphEOc5eUvuClc0BVf/huwWrpjFZK8ZqVbTPHCYpqLQZSjtfqJWiparaZ44h1F1fJUflUij9/IWOd8fe05eeTT51ilCoxLQ0vTtCrVeKH2w04+9Vwjb63uNxO1O1TnP96FOVwEqt+TO10mvdE+s29PCT3uNxvJQNHX3ARP5Z7659keo8RWBxlbxZT9ppe/zg9xMpRMJhXYkuWR/63p9WW0Ve6jiO7y+6vMD3HWeZukbQNmJvmrVYNZ81UmKnQ2NZcVzXdWyVhxOIN9FH4nV9Fqk3ifvLKPIyFewzbOMk8OzZglKW5v66g7Z33Hv53Eh6WqND3zvNFqg+ZeFxv4bodbz2ft8wM35nh1vLF335wLTN+iuLvvdO3rvD92pO0WvKo3kl5bcTcSTW4f8p7w4/Ync6jqzSBzzp1hUOru9NdI4lUzqT3cm0adcvOPXDkspvfta7u+kZK32kVPIZs0E7BJKpDbB3q/AFBsM8fLzQZVnvxZ/vf+h7H3S9R6OMrpMIXTW2VIYNBuHN6ojk95cwBi8tteFZfW+in6zqPZo3PeIJ1XpDbf4EGIp3V81pXpN/n9K1A+Vo+t5Eq5T3X8/EoWW011adWg9ajeGpAXnTOyWXpjqkaas+4hf0vYksQ8+b2gk16SMMnK6sCMDe6pMuX/jPz/oHdYRefICCDuHdl4ea9jMrog+l602bfWme89aT9twi4X1Mn71uEVj9BlhvkTEFpfFuEoFR/+sjJTR+COBNb8Tu0XhZfiMy22GdLxQYIRorzrg8ws01YX5bsVme7ge2hbRhvPnz6SDagrNbqxFvdATce8SZ+4HRFvTOR09jry/1ZhcLom6faYR0DiMx7Vt/WpMFIydXm6KnILhC4N3eoxn16zdQXy86e/12b/rsF9w6OGDvp7Eh0JIBroIarrfzyi8fsPfTQARA7/QGsHcFWbaG/G7pZQE8lLyTmXnjdd5k/gn5KD14f8y/bWbkgBbpTbTaxCfqA14UyJ/UgPzqB++7D8g+Mnqj9xX0Rm8Y0Bu9oUBv9L6A3ujd751Blg290RsK9EbvC6LeC/Qe6y9DIBi0t4/e6A3DoL3JaQ30BuAXeYMWDr0H6L1Eb/SGYdDec/T+U97kwiOAvTluoDd6Q4Heit5k4eT/YZEDeqM3FOit6E0uMvur3lr/w/cIeqM3FOgN4g26P+igvVfoPVbcmZIFeg/Qm/wHSvQG4Bd5g+51jd7oDQV6g3grb/dLY9De5OZg6A0AeqM3FOiN3hfQG73R+8Zf9faIT0DP3kFv9IYCvdH7AnqjN3rfIHdRAt1LCL3RGwr0VvQm9wNEbwB+kTfoAcDoPUBvcndw9AYAvQfoTW5Wjt4A/CJvuA2MR+g9SO8KvdEbhkF7k6eNoDcAv8hb75CoB9B7gN7Edae/6g1aNvQeuvcWtGyD9iaOSduClg29h+79CVq2V3oTx8jp32/X+8J17XSu23kD8vZTN0vaeL29fddxTZzVqO39xMfaakPDXir9BNrejp3lzZZRtJd6f7OxJoYpaa/lPYvaDaMsIN70A4sZTBNDYmWAsvcyqwXPx3uT94U2E/zvGzXvdHJgBP5h7zN1JHDfFbzthHLCcC/v8+4ogz51We9VLtCG0VDx5hx52cs64M4bS3k74fMxwqK89X5/sY/YqauEty14nhid++Ma1dZ5qJCw/olY1NvPpFsykvtDSdX2CVZjT3cS855rPnFjcjcO4X3fuYf5ChNSHncRb1PwAF8eDVuH4y16dHAfxdOcYr932gAEnhLdSHHv/gO7BUkezPu8ZayP66YuqqoKgqqaJK21/j6ItyWfNAnvkW9M8iIzvC4Hc64szZVrRFVSU06pFzXne8/ETiT/tJLInVPmp/25m7VF9PgfMTLefBamG+SC5xBztjgjvZ1W4Mvi0JWekIfzvrJ0w1ikP3XbSpzj3d+YxpnaHhvg3he67JBxwvWN3b8CM737+gyfuas85vEa74tOte8pd+7zvFN+ndkmWpslvc67w4l6GiWD6e3zK3aruyPYS707FkbDK3/j0L0zxvUX1gBjj6/27nAqXl03KN4m7xFvQTYLeoN3h8153mtyazeDP5Y3AVpC9h5vibTCM6fsDwOwidh3eXctlVg/t2F+coI83e993h2B1PDnC63f7P24/E8CWOu3e48WSnk8LW3X493e3WtNOpGvQZcBfwGYjy18/5qd+vxu80p4ZudMyXxfX8MtlyJBH9Dz9mepEYRd9l3upp93WdjpuFmXTZxXmZfOKOWRGMJ47JstTTsKJm0X8ak31AXdx22YuWb/HK2i98zOJvVGsHn+LJPAJhP/uWCintxV7NSt8p3oG+Fzn4Reyq4gst6+bRSx2utol2f27T6ItOyl+S9o1Z/X0lnnlUubpxP3XsyNiaXxAr6WIzGukydmby0/D00s0kx8opdJ2Uapr+C99IpSW/mbQ/s1TcyfU6/90apq4KKON21kSnibWas+JcVkWtiP/0xP8BG5QAPXJFa4EvBOA7HRTDVqz9yxPmN+AEDTuZNvFNKbkxiBFeH1IeiQbiPGVf930Ptvgd5/CzXvY1m3ySQMIsNzL3hdslIk7V5x/Y0Ap53V5kWVdSHPMT3PMLKgyOtSZZ2TnPdpUxeBm/IzH99cGZNWc33GHZvzclCTn4/PUzeY5KXMjy7kfSrbykjltraY20Gr1xXZ1IEttz2SYxqVYNA+72McenPlMR9ftfsXV7byBKBvGkVvOjXipMVxqB78DjOTc69Fl3tyOSdW7BhrxkDIITFAd9BchWKP32YCekBMmtX0Sl89HPt8Zld4LxjWG80Dzu9/oX+Bp1LcKH9O5/2HufZp8hLnK8uAXat6lnZqBjZa4r5fTpH7zomtDPTZpjKj16vwFXeaxLw1sdep9EUQl+sE9KQtHqvH4YUa9BA/HnayLuvsXdGeuF9ifAxfWLGGh/fV1uzedqsHQ5qFEeipKFL8Byd9tvR5BXhoAAAAAElFTkSuQmCC'
                : 'data:image/png;base64,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'
            }
            alt=""
            className={`
              object-fill mx-auto hover:cursor-pointer ${
                bookActive
                  ? 'object-fit scale-90 hover:scale-95'
                  : 'hover:scale-110'
              }
                `}
            onClick={() => {
              setBookActive(!bookActive);
            }}
          ></img>
        </div>
      </div>
    </nav>
  );
};

import { SVGProps } from 'react';

export const RoomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 .527h25v30H0z" />
    <defs>
      <pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#b" transform="matrix(.01111 0 0 .00926 0 .083)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADp0lEQVR4nO2cu2sVQRSHV8UERLEwtQkhFtr6aLRMI2LpnxAbCxvR1lIEH4kW2vgqrY2NrWXKoASMGrBLJFHQ5C7KJ4sTuLncx87svPd8EAjc7JnffOzM2d17b4pCEARBEIS0APaHzpA1wDngJfAb+AU8B86GzpUFwDhwBXjPYJaAq8Ch0HmTA5gG7gDr1GcLmK+ODZ0/+r0XmAVeA38w5y/wTq2EA6HnFQ3AUeA6sIp9qpq3gImirQCngaeqsblmR62U80UboF5zc02+zZP/ze0usGG45y4OeX1R/Y0uGyrTdNub21b3VcSgP2pwlZJ287TQ3Jb6Le1hoi1uTd+A21E3z4bNbWdUs6oj2kGe2SIGLJxBq3Uvv3RFu15hXgixJ2Io2nLPqFbISWNxHoPOm3b5pqJ7asXXPNXSq5bOBwIuPSyKjqp5AmPAA2DbIED1KPMZcKaJCNei+zyGfWE4323lasxk4PsGA34CbgDHbAnwJbprnAngpmHzvGcy4IbGnvUGuOjy3Q88ie7pSZeAtxp3nusmA41i0+fzXzyLNm2eJsWjuq4koGid5hnlxICZqonEkkeHJEQDF7qvx0PnyUo0cFhtOcsmNUX0aEEngIfAjyayGh5bXePOFLmd0cA+ndv1wn2e7lvny1W+Ose5ymOtELAySm43HvL08hG4Bhypc7ztPNYKDTp2EAHz/FRP5E7VqWMrj4+J9SWCPNpP5Jrk8TmxPUSWZ8V1nlATo215sp0YkeXJdmJElifUxD5Hlic70V/Vu9PjkeSxUrPOsb4mtqYj2EMeqzV15uRqYmsmgh3myU70WhPBDvJkJ/oLMAcc1B58b61JdZs8iOq1ybaKnjN6672/4E4NN51hwrMV3QTguHrT1+TzFSXwqvfZs24Rr36sFfIjeKhwNPHqx1ohu1uELrtbihZe/Vgr5OcMtopXP9YKJSR4F69+rBVKSPAuXv3YKpSS4CRFpyg4KdGOryJ8MRmt6JTP4Lo3PkFFZya4tnB8ic5c8EjhuBbdMsEDheNBdMpNzhYdH6KFIYhoT4hoT4joiEVXX28T9Ng0Eb2gOYgAC6bfqXusrh2F4VSOHjX6SEXXDUr1X1kEzWciIjw2wXKGexbccuGld8EtE14GF5y58DI6wZkJL6MXnLjwMjnBiQkvkxccufAyO8GRCS+zFxxYePsEexYugh0LF8GOhYtgx8JFsGPhZeubnG2AKeAJ8F39VL9PWR9IEARBEAShSJl//g0WI5WSfY8AAAAASUVORK5CYII="
        id="b"
        width={90}
        height={90}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);

export const AnonymousMaskIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={31}
    viewBox="0 0 25 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect y={0.527344} width={25} height={30} fill="url(#pattern0_63_439)" />
    <defs>
      <pattern id="pattern0_63_439" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_63_439" transform="matrix(0.0111111 0 0 0.00925926 0 0.0833333)" />
      </pattern>
      <image
        id="image0_63_439"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const GearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={31}
    viewBox="0 0 25 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect y={0.527344} width={25} height={30} fill="url(#pattern0_63_440)" />
    <defs>
      <pattern id="pattern0_63_440" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_63_440" transform="matrix(0.0111111 0 0 0.00925926 0 0.0833333)" />
      </pattern>
      <image
        id="image0_63_440"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={31}
    viewBox="0 0 25 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect y={0.527344} width={25} height={30} fill="url(#pattern0_63_442)" />
    <defs>
      <pattern id="pattern0_63_442" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_63_442" transform="matrix(0.0111111 0 0 0.00925926 0 0.0833333)" />
      </pattern>
      <image
        id="image0_63_442"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6ElEQVR4nO2dSWsUQRSAHxg33K5uoBL9Ay4nFUVUcAH1oIILuF8ixBj07M0FNwL+DdeDoj8gRpSY6MGL4sE9JsaTCSR+8kgJEWZ0JN31qrvfBwNhmOXVx6S6llevRRzHcRzHcRzHcZzGACYBq4CjwCXgNtALvAYGgOHwGAjP9YbXXAzvWamf0eDXVQtgIXAKuAd8Z+IMAneBVmCBVBlgOnAQeASMkh8jwEPgADBNqgIwM/zS3hOfL8A5YI6UFWAycAboxx6NoV1jkjIBrAVekB6vgI1SdLRPBG4AP0kXja0DmCpFBFgMPKY4PAOWSpHQf8eMhmmx0WHhBikCwC7gB8VlGNgrKQOcyHlMHAttw3FJEWBnmByUhVFgj6SE9mvAEOVjGNgsKQAsK+iF738ukM3WkqeGYVHZeWo6zg6TkarQYSV5ncGMrxO4Gh76d0y0rWssFoheRmzkN2BLjTi2hj40FrrJ0BRTtK7CxWTLX2LZFjmWtliSZ0Ve6uxsIKauiPH06Zp6DNFnicvlBmK6Ejmm9hjbT58SFH01ckwfct0WC3t8selMrOv4zf48RetGqgVb/xLTdqOYHuSZEmC1Mjeoo4s6kmMO78ajC2jz8hCteRfWdIX++BrwxDoY4GQeojW5xfmTm3mkaenszPmTb5mmn4VcOKc2K7IUfazOlzhwOEvRmtXp1OZ8lqLv1PkShwwviECPG61Ld5ai32KM1I/NmjdZijbPAJV0RfdlKVq33U2RdEUPuegCivauI1LX4RfDSBdD8+Gd1I+tVMM78wmLpCv6Zqmm4JKu6Eyn4Hoi1RRJV/ShUi2TSrqil5dq4V/SFJ3twn9okJ6tNkPSFJ3tVlZokB4rNkPSFN2Sh+j5lmdUJD3R6mJu5qJDo7RKgAmSnuj7uUg2TAlLVfS+vM92W5R/IDHRHzXhMzfRRknoKYo+navk0LAZIRm7qqK/RklED43ToiJVFd0aRXJoXBPwnOrxInrVGj0KlnjBk6zRtq6LKnmcbK3cUhWum0ged0RZj++WnSfAFDPRQXazYdZ9rBW6JZICwPqCV52ph+azbJKUAHaUsDDKbkkRLY9TklI/I5oTLikTSv4UuRsZSq7Ezz9K/wwW9MK3XooEsMigpsZEeGpe0meC4+yOxGeQGtt183FyhtP1HtJDY1otZYKxhag2iyXWGvSFzeZ41WRiw9h6tjbynYHgz6FQ92ypCoxti+3XKgE5T3T0s+/rHl+lSs/XQqsE6AF24Fa4G8VEGQif1ZJbSkDRYSz9bDlwBLig2UCagxxuBdI/7vYg/eG57vAafe3h8F6/PYjjOI7jOI7jOI40yC8w//Rf6+5qZAAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={31}
    viewBox="0 0 25 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect y={0.527344} width={25} height={30} fill="url(#pattern0_63_443)" />
    <defs>
      <pattern id="pattern0_63_443" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_63_443" transform="matrix(0.0111111 0 0 0.00925926 0 0.0833333)" />
      </pattern>
      <image
        id="image0_63_443"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIklEQVR4nO2dzWtdRRiHx0SN1aYVVISKYFtFcePatYq1rYjBhVEUBauxXSj4Lwh3oVFsNVgtCkK7caGkouK+NSrprjUWK2ijVVtB1FYiNI+83he5hDvnzPmYe86ZmQcCIR/z8bvnzrzzzvzmGpNIJBKJRCKR8ABwM7AHOAQcA84B/+jXOf3ZIf2brT7aECzApcCjwOcU5ygwDYw33Y9WA2wDvqE6S8A9TfendQBXAK9RP+8BVzbdv1YAXAd8hT++lDpMzACb9G3um6+jFZu+yC7j8Q/AG8B24DZgg37J9zv0d/I3Lk/2OhMTwPXA8RxhTgPPAZc7RiqPA9/llPmmiQXcRP4Y2Fii7Engg5yy7zOhg9twMQuMVahjDNibM16Px/4kv1RTXSL2fEY90ybgEG4pR+RezXXKhLlsqeuoCQ1gnUOc3PNU9zOW+laBLSYkgLeaEFnrvkyjl2E8a0IBuLcpkQfaIHH2MA6aEKAf22ZFGC+PqB07LfUvmhCgn+q08X6VEK5gO261tOGsCQHs+WSJBNaPsB0SfQxjxQSyM2LjsRG3ZWPIQu+xdO4nGbtH3JZwhw76+3iNTYBr2nJ/sJMh/U3TYTzo8L8T8oIAvwF/AfurpDeBuWDDO/o71MPY4iCyZO7Wst/DgmXGdB1gxdK5a3L2DYeJLPxRsh0zGUvwzabrAOctHdxQQmTh95LRxo+W8o6YEMC+tXR7CZGFV0qkST/KKO9hEwLAoqWDUyVElt9PFKxfNg9sHA8m8Q+8Y+nk/5Oa7AUCh3NE/lRejIJ1v5hT5jYTCsCTlk7+rE+xrye5l1PmnAkJ4Cad2YfxAvBJAyIvFH13dALgM0uHVxsQWbbRrjUhAkxRHB9j8kngBhMqwHjGUrzyk6whXFZ0gW48bDKhA9wJXPQg8gaHiCUOkQdyFyfrElm3x2RZfSaJnJ8gchZZzjYDdwAP6W76rw7vjvY/yRmekfO6rF7UxcgTEsJ5FvlG4BTFWGqtyBU8I6sawk0NLmlrFPnbgu1ZaG0IV6Nn5JhOfE2JPNfKxYge03qberlYdeIrIfIJ4C4TqWfEt8gyZB2RVGdrs3Aj9IwUDuHkgDhwQIchOftxQXdqzuokfFBDu80he0au0kTRA3rIW7JwrhTOXXQWR5FF4F0u5y40l/y8jwRRZ/HhGcFT0r6z+PCM4Clp31l8eEZIT7J/zwjpSfbvGSGJ7N8zQg0i62JkuwkFuaPCw5g8XyW6GFjxHTCReEZmC5Y3UXOCqPvHZB08I/NFPSPAvhpFFpZNCGTkk2XFN1mwrLGMg4plRBYumMA9I0+VKG8M+LvC9tOp2Dwj35f1jADvFhVZ/0/2+KLzjOyrUOZ6FVue7D+BV12W1bqROozuT4YZB1UqXwICXFJTHB+0Z+SWBkLMX2L0jEyOuB0zoXtGGheavmfkTOiekUaHDvrh4OEYPCO2yXAkiRwi8ozYwrvXR1B3j2zaee6iDMDujOW3N5M7EXpGtmbsSO/yVGcvVs+ILal02uZYrVBXL2bPyCM5yflaJiSSZ+Q/z0jWhuzeGq6inO38IfA6AO7OEUKyb1eXvFz1w6jdT2uRq3tzBFnW64InHO+7eDrj6sk4RR44biCXUrseZtyhhxknBy7A3qmHu22XisQ3XGQcoJHre32zFK3Ia8T+wqPIC8GGcEVJH7vRzMGaOoaSE0HlLjx6s6f1Y47yDpB3yzPSVuRaNLk/WX0hi5rPXumkZySRSCQSiUTCdJV/AbxDlXSpg3MFAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export const DoorBellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={46}
    height={61}
    viewBox="0 0 46 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect x={0.5} y={0.5} width={45} height={60} fill="url(#pattern0_69_402)" />
    <defs>
      <pattern id="pattern0_69_402" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_69_402" transform="matrix(0.0111111 0 0 0.00833333 0 0.125)" />
      </pattern>
      <image
        id="image0_69_402"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD8ElEQVR4nO2cz48UVRDHX1BQPABRI0QlQgJejH8CF+WiBs4ePBrxAhISD/4LEH9rhEAiZ/8CEyNrICrKwM4re6aqB8wky27VAILKshpEaPOWQCCAM9Pds/XeTH2Sb7KH7Z5+n9TU6857Pc4ZhmEYhmEYhmEY5el2u4+i772DwD8R8JUQBD6OILs6nc4jFU5t3KLjzz6Lnj2BFPcLem6G/7l9gFG2kh8s+S7ZVtnlCe2in+TbskF2VvioyQYXe/Jgogn4R+3rTRbyPD+waM/z2tebJNSYe3Lwar6Zdnv2Ce3rToJO57dVCPw2ghxD4H+HFR2OQZCjCLwjnEt7PNEB0FtLXvYN1SoGaCUEvPdMU55yk06jUSwn4D3k+XJtgu+99fszfMbUVPGwm0RwWjaQ5+9HJfjeCpcTrVPnN7tJIgd5bZRV/H/VnQO/6iYBBH6rzERXm+zw2b73phtnEHgHer6hJfmOyr4xtrLJ8yualXy/ykbf2+7GiXZz9nmNntw3ni+PzQSZZdkKAjmpLvWBsuVEuM10qdMGeU9dZr824uVdlzJ48sLTN1dERF1mnxYyn2Xn1rlUIc+fqEuEgav6fZciWTbzOHr5W1sgDZ6F7nR3jUsN8nO7I5BXDFXVKa7ShNk8PdF83KVEPj3zTAxPgDSsaM/Xk5oUCfgNbWlUMnlTXnepQJ4/1hZGZasa5EOXCgj8jbYwKp+vXSqQ59MRCCtKJnepgMB/RCCsKBUvF10qEPA/CYu+6lJBXRZUi0sFbVFkokVdolU06Au21gEm2nq0JtpffZqE1hH2uGmLoopJYp9eWFnRFkUVk8RKS6vFz2mLooo5/cvsehc76HsvaouiimlNywsudrAp27RFUcUkseM0bEbRFkWVw3tc7KDnQ/qipGoOuNhBLz9HIKoY69XwXxuXVse0NZdKh69F/VZX2G+sL0lqSXj9w8UKAX+kLYhqCoJ84GKkKIplCHJ2jETPFl8VD7nYyKG3VVsO1Z2mvORig0AOq4uBusNfans1DMMwDMMYMY3G3GMI8nnSGxmhXBDkdwT+bOaHmZVL8W7Kfu0Bk3a87F+Kx+y/1AcK6lkILkw0JC46YK1DQuv4wo2aMBGQ50/DxBDBV7hY4lwKr10vyWQ4ahD4YFUh4Rza44geAslrqDzSHkf0EMhCddF8RXsc0UM1/Jpj+Nk17XFED4FQddHS1h7HREyGNOont3Egr2PtMca1vhhB4G8rVPN32tefDNSUjQhyoYTki1l2bpP29SdF7ue2BHHDSA7HaF93krROnd9Mnqf6S+YjVsk1QL73cthKG27bFu+zPc8v/g1ywCY+wzAMwzAMdwf/ATzCmS3J7s/oAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export const CancelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={46}
    height={61}
    viewBox="0 0 46 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect x={0.5} y={0.5} width={45} height={60} fill="url(#pattern0_69_401)" />
    <defs>
      <pattern id="pattern0_69_401" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_69_401" transform="matrix(0.0111111 0 0 0.00833333 0 0.125)" />
      </pattern>
      <image
        id="image0_69_401"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFZklEQVR4nO2dz29bRRDHV2r5JRAcKQUJUOEf4McJEAjxQz0g4ABItEgUCpdWKj+EEm7cgJ6qSPwTPUChBxAccgOEHOIZv3gnlkJQ4M3YaZqUE43UYjTvpYiQxLzEu2/fs/crjWTF9nr3k/X+mJ0dGxMVFRUVFRUVFRUVFRVVTP2z/X3U4oepJW8S8mmLfI6Q0SIvEMoqgaxnhrKa/y177pxF/lTfY5Ef0jIKftx4qQO/3UWQvkPA5y3wH4TSH8Ys8iVC/spC99T87NKdZpy19P3STdTi1yzydxb46rBwB0C/QsDfEvLRxcXFG824KEl6t2hPI+TUF9ydocuyBfloobF6mxlVNRr96yzIBwRysWzAWwzkokV+X+tkRknzkD5GyK3ggLcazWP3KVN36ZhoUT6zwH9VAOr2w4nWDXiq0+ncYOooOyv3WOQfQ4Ok4jaTJL37TJ2kX0cXyzQqu3frsrApT5o6aB7TFy3In6Gh0V5NN0MtecVUWRb5bZ9rYiqrZwNfnYf0LVNFEaYvZJuDCoAiR7AJ5WVTJem4ZkEuh4ZDrg1kvd1KnzFV0NzPy/fXceKjoj0b+VKn1TsUFLKuPXVZFBoG+bdG0HW2bkYqAKFfigFPBdtWV3nHR45N29pGfrxUyNPT/f0WGEI3nko3bpXqiMq8cMEbLWEM+N3S/MkEsjK+oGVFGXgHTSgTwRuLYU192f6Pn4C7jnrGuv7TkqR3QE0fu9z0bJS1qfyNz3RQd2avx2J6xuewZ0xsKR/4sAvYWRnAh7eUjzLprlenR7yB1oNUVxVNkt6BbT+jmT47lPcPZN025bntykbs3u4OtHztBbIe27t0GiU7gB4K9gDIWbkzFw469fD5CGXI4i4cVZJymxz8ebsbRnYaLv6tNsqHLtvQRjnpATSfd1lJWwBMUdguy9plG75wCllDrCzKmuMe3f+/r3qhYcRFGXsFjbLmNPwsi4VzDRmH742hevJm2PygO9DQPe6rorTXXhmwJ/+nVx9zBxr5tFfQuEtwFYGcf6v4Y5egv/QOGosPBaGHC28TYpkuUVsAdlUgb9R31hloAvm1rIqTWoGhIeRwsQk08i8uQZcfAQq7gx0Ccg5aLrgE7cbrhX5gh4KcgQa5HEFj/UDHoQPLGTriZIglTIZxeSflLO/yu37ljHdUvw3L585Axy24lLQFz26xeuwZUGOnEsjrDkFHNyntALoN6QPOQEfHv5Tj+Ffp3eoQE5+t9lGWu4nwmvJrxU7HtwmXYArBdhjXsTFPnHAPeubCwbqHG6DTuA6+MqgNQynPElDfABrrMq7DVwBNBhr5qM+4DvIcEuYyrsNC91XfQY7ipLKQuV4n2+3lO9T0sYcgx03lu3P3cuo998dYB6HjP6DfM77VbMrN6hoM31gZ7UB0lQZiB28whjFd5pqSLws1QzeaRv2ykIqa6aPx+ltJ0kuOY9Sbz5jAV5Qb4SGIV7MgPyVJcn0w0BnsVu9QntBvRCGjrFFT7jVVkG3JE7XOOoMD0khg92lTJRF0nx/BxCgvmSpK0+OMRKof1DSb3eOmyspS/tR4GLG5j6RaKX4Gpv6p4QRpUdZ0vjF10twc303IP4SGR8WtETylz1DrbOCpKu8g87rxmeDrZIfbdaggZKBW+ogZJU1P9/drUpEquFi1DuqF0zqZUVVT/dnQPWVRfi8fMPc0UXens3KrGRctZimP0yOE8o3PjY6WrQepesY3Vqnnt1N2rodyUq+SZb9MMTzg1awskBPeQgLqrv7Z/j6NZ7Mob1jkTzQaSGOQs58C0ZsH134eJE8fv5A9p6/R16Ic0/fGnweJioqKioqKioqKiooyxfU3ySq92BLCZwcAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

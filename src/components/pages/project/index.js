import React from 'react'
import sneak from '../../../assets/sneak.png'
import fsweet from '../../../assets/fsweet.png'
import free from '../../../assets/internship.png'
import BtnPage from '../../button-page'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'


function Project() {

    const navigate = useNavigate()

  return (
    <div class="min-h-screen mockup-window py-8 px-6 border bg-base-200 pb-10">
        <div className="sm:flex justify-center mt-20 sm:mt-10">
                <div className="flex justify-center">
                    <img src={free} className='w-full h-60 sm:h-80' alt="" />
                </div>
                <div class="hero-content text-center">
                    <div class="w-lg sm:max-w-sm md:max-wd-md">
                        <h1 class="text-2xl sm:text-5xl py-6 font-bold">Hello World!</h1>
                        <p class="sm:py-6">
                        My Name is Herdiyana Firmansyah, and I'am a Fullstack Developer who loves programming
                        especially JavaScript stacks and moderncomputers
                        technology. have a lot of experience in
                        programming since getting to know coding in
                        vocational high school. I'm currently attending
                        DumbWays online bootcamp in 6 weeks
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center sm:mt-10 mb-5">
            <p className='title-progress font-bold text-2xl'>My Project Finished :</p>
        </div>
            <div class="grid grid-row-1 justify-center sm:ml-20 sm:grid-cols-3 sm:gap-2">
                <div class="card w-60 sm:w-80 cursor-pointer bg-base-100 mt-10 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-100">
                    <a href="https://journey-diary.netlify.app/" target='_blank'>
                        <figure className='w-full bg-white h-40'><img src="data:image/png;base64,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" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </a>
                </div>
                <div class="card w-60 sm:w-80 cursor-pointer bg-base-100 mt-10 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-100">
                    <a href="https://waysbuck-1.netlify.app/" target='_blank'>
                        <figure className='w-full bg-white h-40'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABZDSURBVHgB7VzNbxzHlX/dM/ySvNAoQLCAEUAt24fFIoBIe/egNRLOmJKSnEgllwA5cHjNhdQ5CThMfBf1F3CIBLmKPBleW2Yz3l1skI05BALsxbZaQAIECBCNYJscDme69/2q6vXUNLvnm06w8ANm+qu6uupX76tefRB9RWORQ39H9M7srJdrtwtOFBVcx/Eix6njHMcoDOtIk3/ppVqpXq/T3wn9zQAEWFNhOK+Ayecpz/fO2+16O5erf6/RCNLeOSgUCudffOE5uVwB1xGRN0UU4L175+c1+hvQlwrgwdTUfHtqynPOzwvNXM7PAmrofLkxiDm3ZYC922j49CXRpQMIrmk1GvNuu+25V6/uJcVPuCpHNB+57rzjONdYbD3zuGCO6h3muDr/nuXC8Gkrio6zxPm92dmiy9zJP780oUbKoksDEFwREhUZuFopIV7v5fPFvOsusm4rMiBFGoO4AjX+zmHUbu/dbbX8ZBlaDCSrh+CygJw4gOCo9slJkbmpbouSgMaV3SDHKdBlUBSBG/fCMNy1wbxMICcK4PvT0yu5KApsjgNwuVxucwROC/idQC64oB7p38Dvu2FY4bLsyg2jKxfte+PSRABEwdpsUXNXrviikwYCjjkmdN1HfOYzhwR56K0oOlCP+N6ds7NS8jtstR+z6M+bwvuhPhZ7FO8CkE9mZ8uT0o8ujUlQ2LCAd5pNZSAgwk+mpx+7udxBBniBnPDzNRbzioh6fnb2givy72y5n8zMPMYRFW4T7cszNjhrADmKot1k3hZ53EhVlo4jxYFMS41GFUf2ClZpTBoLQIis0itGZA9mZtbDk5OnXLOVlOT10HFK/FuTGwAdR26EylQU7ah3DbElDnCcYr8wZIuLIxqHC3wL9xm0mnAQA7moKsP58+8mODP5cU4zz/k8PZie3sS1evf8fB+SQmPQyAB+MDu7qESWC4KKMXgPWZy2kwYCFTWn9aR/JoUHF4KTlprN6wzwVteHZmfrFIa+OjYaBaMLicVYcZ2SAL4ngOIX9dCVnH/lg5mZA3BjCWViYwNGEO4cloYGEGABvLcajUMlstB/p6cHyromiCt1n7lsAVwRpYgXxJzFfYdFaR2VwD2ACd3IAL3ANSw6p9th8JYVOFH0SOUNUJmcMCyr6wSg1mcCY5075WLVwtx4IKBBEuByjQLi0ABGjcYtgIdz5etxQZgr5tPSstg8BJeh4mIQ4FDHeWkf7lnLca7LPVUJ5uLIVBqVWzo7u8l5KIDgO+IoXTc43jjmHUepgxhQzhsNh3fB2aRVR2AVD2U/koaDXhwFxKGsMD4megvdMhaHgy6RBeewkudKdSlntqyVUrOpRFP1EjIsLQyF67o7aBAAwPkokNive4ZjjnWdGCbD3XuoMPeFCwBUNWgYHnGZ6u7c3IIYNYi+UjWmwSkh4gx0WRpIuWKWNzExAJ9MTZWlK2YV1NZ3AZR4j4IG4AacQAcJEJbC96Lh/DxUcIuBqsZAnZw85EYtCyB2OdGIdOXKI1YJ28kGBtkgQmqSvZosGghAcI148VmtyGyytnR+XgVnilWGv8Wssilpw3a7hIIpaw2DMyFytNPtxUUx32FuqnaBBbUgjW6fa6qzL1tSnMx98Pb0dFGkrc+3e5NEOgAKWjk8PT2iFE4BJ73F4ggR4PNl98qVB7GRYUcWFUG/lXRAoJj6MW08fNLxv2dd+evK3uA0nmMc6SziBt6622xWVFkc53FKEiUt7Sja4DKtJ+8Lo4hq6PWtQQBctfRDNY39hVicrgO092ZmNu6enW0DcAUi9KXroiJe8h3oQY7E7DUcZ98KbyFdgTrRGFU584v723y6klGeOgOxIEDYQKnvzc3dj1UR+4bUDUiNGWHB1LevPuwJoG00oAOJFbxdIeas+znLkEjLq0oy8Kx/4Bf6qGhXxqYLxz2PbVO4Iv8WzRHc1SvYAI6AF4By+UoqGo0VW1VI+aQLJw3P4D1io6XcrbhROeKtkbDEmcvN6uhBEoM0ygRQIhhwftP0nugZWE4LxDobCuWSsH/3PC3qgkowB1RKulHBFRt9AOtFAWkjBAsfJHVunIZBgoMOqYjrB6PDZHFiav36iXKmHyjg4Rw6jJKmn51bZI6MWURKxlktwIKhcOKC2BVhjlhgDgB4AA6ig3zHCW15/CubvHbYl/Ohw6y+sU7jOLGfyGXeFNXSYPcGQwutVgvB171k/XCEGpAhhDRK5UBxJvGy7bcZUqI7xbG9NkSTewZgceFEBi4wEZJY0aNCrEs2uNC4t0PDuSvDUEC6UXbRv3Y1NyqCbuP+da3Ng1XwPVPqlUYPlqDLuZHPeSgijQtTORDcJx11/shO1wvcl0RGpbMz6JNSznVVpipz133AIjpvgwe9yACXDddddH8mSx7/qvzbYenZJitwgXLBR4wkmhOGxQHy09zKqimLCy8ACO7LG2unDEdGhdEqKhyETr5kFkXX7DSWUUEjVGiyhIYLMp6VUUSItA2iKmMY3sAxZyI4hgJEiliyYH1tUS60Tk6U0ck3GjVIWfJDaRy4GIeJXLfLCYUoMihV5dogPJXLOewXPlfRDQ4IhPD2DSXAK9NkSSrp8+9RRhpUFiDudYHouhsIaXFd0F30VVnbbcQlfUiRe3bW1WdmiVsXLsRYdfIjFwBk8VUOrIr+Wg5vCBeARREddDYaC9AhKjDJhVPRDdeNQ1komAEPOqhMkydEauZN3mjkLBA90iBW7TAZQlrMEA9MPzxo5fMB7r83PV1RjNGdXyH67DPFrRjnEest1AUgWFSiwsbyxpRHMBIxNB1Z2RALjcIlrF6Q0y1epsmLrRDE0DfnqNAtSgmiGgLQDxEms/rdAEPEsTYThipIix4UABKLHVM+r8QYdcYQrf2oC0CwqHjdTreOIITF4bWLuIo+MC7LopVHhUHG6UO6PCqS1oE16/pZj/QAoOhYogywcGRG2Wq7roo9woOITk4WMb5jvwwJS3KelU+HIJZAeUATDwoc3beVD0rEpUpatEBoEHBowZwXrGdxPjSadZZeCWi5Tx4B/6B6Niz3RrkpkoDHXp5m5cFi/QCOuAqssJTGjCYJDq5eneegQR0i+v7MzHaikz0QGe9dZWcVGuCtm3NpRbmHa5+6rWmRLs/V2eKCbYfT009FX7MIbrNORyOs9OrnS7AE53b3LhbhFiIu4vuZgZshKTAxtE3rHoBaNUe0GDgGftgtc42fp8sXG4WATNeMJk/rQEDC/yAMRSBi0ws8kCVlxL5vx3WLT7pD7UUakqD7SINRNLcC0kAJt+H+CmlAX5g0D8w7AijSHpo0vrkeluqUbVDAdeUoaSQGo4Lo/ZZ1MwYQc/BwNIMyoxAqvmFdH5NutRuJdKIDhTt9Kz3Sbpp7SAfjlOWiZNGeeRfvBSnPl40HEdCQlBMubHUgdK2TCEcelBm6c2+N0S6mPH6Rcq9KGrwiaeBRMPRi8O1dcx8NGph0w4g01IFHmuvTOLiI70TWAP2gJK5Pnv3Gd0y8QAGIblkripQbEGWMsPUusnNoCm2/CzCDjDeeUcdQCBfium5dF0lzJUi4MqD+BGu8m8g7SYvMKDUanjz8gVnEd1QAtmZn56euXg1w7oxgAd20MRLNTaLPbDGsUrcbg/dE3HEEiGXSBgfphFNwz6eO75dFhUTeQUqaEoerfBqWoihWR+wrKsmKRVj8GjYGN2hIMpmlca4AAG4UrrC5Twji9sgcpcuFPMV3FCrT8CCmqRAdbUoMuPcjxwoQc5xA3KDR9J5Npi/ppTzCPbA6OBE6zqeLTrSQGBbRXZG5fy2RboP6g2gDcy3luWYSYzhHoci4MhpAGRcYj7LyAGcum2Ma9wnhPioWkAa9l5IHiL3CWf1oEvVV1HdqByIrkXYNAhqdPPO71iddkTQwqCBAl65fGpUp27AMrYa6SA+vVgeptwIwymBlZPDSK6/s/dvHHz97i32nlxYWRnFshQSYfiQiWjTpewUJytTp5QhVqVsfv6AhCJGl2598srt0ejp/bXHxWLk7PXSlBtDqmkSdwtQ5VFX/51/9av6/XnuNTj/++Lj5l7/0apl++gRA9HKRpAeB3wppEQ5Ii3MvZ9oWd4DpUbeaSGu0IHkDdTJ1C7iu9d8tLh6+/KMfIVy3nOYzit3Imz/lGH5PTx97wdYmTvcPr7++ev3evQcffec73r98+GFh9uWXIVo1HkLcZ925ik45VhdRfxHH8+WM+6g4xK5IGsg980x6Kx51OE3UgKPrHY85A2RY+2QjpTWscKVHOpMapGzuG9+AAfN/z5z3+W9/e+vlw0P1XGaARfbsWtuIEHOaAcFOVPj07bdxXv3ru+8W3vzkk0UGT1lQbp1j7yc/iWdPsUkv0nCuhZCEozbN831zXaZOeMo3aVfNr5x4vkvdQD+y3gkoXR/WVPTJ0D/98pdrv19akp5P8Y3Dw9Wvf//7x1z/3c8++shnES6apAp4dDykO6cALFnxftdMrVVff/vt1f947bUXr7/7rrr+9Oc/3/rw5k3Fzq/+7GcxN/E7t6g/gElOCEg7zuAa+H5F0i7MNeq2sCvUMRbI4z5pPYd7nnlnnTrBiHXq9GACSs6K0OSHzWYM4NfffHPjm9VqAVL1vz/+MfLY/+avf33r01/8gn53+3YhHqqQ2bZXr3pY5KPqnsw54aF7zT/+cflrxeI1jkTv84AMfevp0xv/eni4/lffP46jNnrSo+iwLPKoW8yRVnopwoG+OQpn3qBOz8Q39xHpFn3qmeePTHqAV6WOqsgyQL5M1AQd/+AHUeH27VXWd7f+8Yc/xAyH+ud/+EPd0YPycQNwMOEIx9bZWSHueMhDkekUD73gT08H88yFr/z0p6ho8exPf9quffe7Xd0x07nu5bstUid6XKOOeCKfPVNxMsBAvyVFvmzeEZFHHrvm3VXq5mTP5JcW3FBltIchPjs6Wqn/5jfbePdr3/725reC4Np/v/HGseg+IVZVx+YYly0G0O6NJKZlFHg8ZMN13aj55z9XIcb/+eqrK5RwiPN6am2Vssk2NDXqBAsAguSHa+G8ZXPtWXkAXAlx4XzVvFsxeW+a9Ht00RoL7aTMoy58dO/exv/cvbvFOq+KGyYmYIt/6iqn2NweWNMXMD3NHX5QSCYWVSm7u+abI4CBuC3w7zF1/D6PNBAAUTg2Ky+A9II6ERfkiUYSrknTfQH/bvabppdKPB6+1Gyu4dSewdoJJliGJD9ixNYsXKn0SFMkDYoYHYDomWc4+qRFbNU6ZhEAErF9ZtIuUyfynUYVDM0ODR4pTlOYqIE3a/pvlxGx9aDT2yCkEot6hYf/RKlnEQqPCgOgsrmH613rOd5fpv7kkRZbNMiauVfISBvgG8nx7kHJuXJF6e9k4OXi3Bgz/tnWQdJhyTNzSSqU7Vh7pCv8nDo+26q5BzEUo+DRYFQ170EVFHqkK5kpv0NzH8RXrK7dawM5ybQyNgydGM7MPKcRCJN0WJfi9KhHsoA6ug7nqPw8DU4+ac7F+16ftFssutUwPfDbl2SypVqym1jkfYEDIwlbY8C8e8rGwMTDfo+ZkwPSo25Z5FF3oHUQ8FDwKnWLu9fnHXB5JQzDhzQCeNQZrlXuS3K+dD6ZeqrRUJMlYY2ZXauqvzs8edHpKUSK20Fx1mZWOvMsIG0MbtDFCeYwNij0M/N8hQaP5wHoDcxKZe5boRHIDNfKpNMLvS0n7SURY5xjqSllW7Xe1DH9FcoGMUkCmJBHo3EOwCsb8Co0GsWLg2xMbEoF0PYJM1YlDUN77tzcGrN+kbRv6dHlE1TH9pjgdS0nw3WaI50akbZ9QrxkVpWPSitYnHOgp81BpEfSqwMSvrHA+rd6MD29Mw54kB6Z/2JPeU5SZkg/12z6spIxj/nGY4b01fLSqSkYjTJpny2gyRFEHly3wJZSrabCfGganQLuukInQ/cV8z3KmgkguJArHcjCZMzMp/HIXnrv8/VNGp8jfdJDADc5zz3ZaoA6aiIQIzAMmTmOaiF5G5a3x94KPQeV1BoQM51BZuHTYKQmbbMCdrD8y16rK0vvMVGTwYReLfMPfWg0kDjWQVqepEUUadbMOyXmuOP3Z2YqasmWFXpid+yRWvLaaGxZq+b7Et6TpW1YTnbn5KRnt9bpk58yKPbKxb4dcQ6FMfsvJFstc5WnXkmEkb99LJnot5NGvE6O43nc+stRMj+MqOXza6i4mucdRTuYUD6IEURo/45ZJ2evUO31Tl8AVaETy50+YDGMslZMGtfFBkwWXD/Bhg/9RIoBkHCaGuDSO7h5ZHzDKMuK66HIGoN1KOv1wOXcJd0CEAN4EkOv1AQNBCCoa80wKjI9fZAKolk3jBnvXKBN60M+OAEWna1aFXvEMDArMjBFIxLGrbFaCqsq6fzcC1utA1mpKWmwPpnTbURaBaSGuWzwSC/1GEg39x1YF4ITicnXYlScZrPkpOiW0Lg/TsJrR/gfoo3Z8rMcMsc8Y8z2xz2JgBtdFfQoBkYNa2b4sQb9iqUKUC+tzz+fb7daZULjWqur1G4iPCjksD5Ua0AujvF2wGP1EIXhrUHBAw0MIMje3UJApOQiPSxM4edI6+bznZU/iGjIine4Gaenz+Em2X4mc1FJbRLBxqfpODdhiFDBpt48wsEz7AJyp9GAEYmlR+nlfH4VulR9isvIPagN9XBubotVivIgQvYNM7cp0HsrLL/VbO7TEDT0rh327hYlHYW+n9jrpQDd90Eut1z64osaP1PjCPGx3S5SZzxWqQC33Q74UO/aNgr7AZqlqpIxAIdq4EGfHeb+G63T0zLuYwEQQIUYWxZ3U5WR88R7FzYEiqI9Y6Vj8IbhPKGhAQQBRBFnXKu9XuCqdMTDY0u4x0r8yE0EI0JrQCbPfqG6x2IfWcOpTi63zqL9cFq7JjJwr99xnOfYKkXdt4KuMFARtiPgOKYJBkOUH8M3VMv+Lc7DkgVwpawVxtqQUcBTZaUx6B29MDFeVxy7DRl7ZslWJFgYHSJMhLij2YcBA/rJzcbi3T2MYZL7GBRnY6FijbLNgGpM1q3CcZl7JXCHIN6qCtsBsJ/bz9frRSNxoBCmgsAyS5cP4qDWUlzc5AakdB9CZeBgAQ+7HpG2yCq92myMRRRrVZT/Rh2uhWgzqE8FPJCspsS3YUgQPXL0AscOYYsBVjNqAx8DnpR5HPBAeRqTjLsQ2FvKASB011iHlY0Ieya5x87yEYsVfL06A+qJCMhWTyqIEUVldd/M0TEzH1RAM+kHwmgx2IUud0jm9sjeDHNz20tGv6Zt1TcOjSXCSYoLZ/UoZCvQlL0MughuCXPcvr07kVVIP4Svx+Mm4SB924ubWsQ9mOQGkePSRAEUgtON0avkbhfmftnMCvBokmR6IuJU29ylxDWfH1tc0+hSABQSINP6uGp2QBhiBeWiM2BftYsEMB6Rw8ojewEgSDgOYu9ypOayNu++VACF7NVPWXs8y3bJCnDHudGKouv2c+W+hOELzKY95wbJ3Kzb7FWdOz+fqKhm0ZcCoE0IULKeLGB8NZrADuT2jujgtkkZh0HpSwfQJuOIY98WbWEZVHCg7JufJJkVJelw3osbv6Kv6P8//R/UeaXJt2P+egAAAABJRU5ErkJggg==" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </a>
                </div>
                <div class="card w-60 sm:w-80 cursor-pointer bg-base-100 mt-10 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-100">
                    <a href="https://product272.netlify.app/" target='_blank'>
                        <figure className='w-full bg-white h-40'><img src={sneak} className='w-60' alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </a>
                </div>
                <div class="card w-60 sm:w-80 cursor-pointer bg-base-100 mt-10 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-100">
                    <a href="https://product27.netlify.app/" target='_blank'>
                        <figure className='w-full bg-white h-40'><img src="https://product27.netlify.app/assets/Group%20190.png" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </a>
                </div>
                <div class="card w-60 sm:w-80 cursor-pointer bg-base-100 mt-10 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-100">
                    <a href="https://im-din.netlify.app/" target='_blank'>
                        <figure className='w-full bg-white h-40'><img src="https://im-din.netlify.app/img/my-logo.png" className='h-20' alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </a>
                </div>
                <div class="card w-60 sm:w-80 cursor-pointer bg-base-100 mt-10 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-100">
                    <a href="https://fsweet.netlify.app/" target='_blank'>
                        <figure className='w-full bg-white h-40'><img src={fsweet} className='w-60' alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </a>
                </div>
            </div>
        <BtnPage setNext={()=>swal("404!", "Page Not Found!", "error")} setLess={()=>navigate('/education')}/>
    </div>
  )
}

export default Project
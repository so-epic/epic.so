import React from 'react'

import ContactButton from '../ContactUsButton'
import LinesIntroduction from '../LinesIntroduction'

import './introduction.css'

const Introduction = () => {
  return (
    <div class="flex flex-col h-screen mt-16 introduction-div overflow-hidden">
      <div class="flex flex-col self-start">
        <h2 class="font-epicLogo font-bold mt-32 ml-8 text-epicTitle text-epicTitleBlue md:ml-16 md:text-personNameSize">epic</h2>
        <h1 class="font-beBetter font-bold text-beBetterSize text-beBetterBlue tracking-wider mt-8 ml-8 md:ml-16 md:text-beBetterMdSize">Be better.</h1>
        <p class="font-beBetter font-light text-descriptionSize text-beBetterBlue tracking-widest mt-4 ml-8 md:ml-16 md:text-buttonSize">Grow a healthy business focusing <br/> on the right customers</p>
        <div class="hidden md:inline mt-8">
          <ContactButton/>
        </div>
      </div>
      <div class="hidden md:inline mt-16">
        <LinesIntroduction />
      </div>
      <div class="absolute md:inline hidden -mt-32">
        <svg class="absolute" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="clip" transform="translate(77 0)">
            <path
              d="M 354.6246032714844 804.708984375 C 340.4237976074219 804.708984375 325.6879577636719 803.8924560546875 310.8263549804688 802.2821655273438 C 287.9898071289062 799.8078002929688 264.9636840820312 795.2681884765625 242.3875427246094 788.7892456054688 C 220.4843444824219 782.5035400390625 198.6651458740234 774.2964477539062 177.5359497070312 764.3961791992188 C 156.9288787841797 754.740478515625 136.6994171142578 743.3447265625 117.4091491699219 730.5255126953125 C 98.46954345703125 717.9393920898438 80.21287536621094 703.8343505859375 63.14594650268555 688.6019287109375 C 46.25634384155273 673.5277709960938 30.35541152954102 657.19287109375 15.88514518737793 640.0509643554688 C 1.44021213054657 622.9392700195312 -11.72178745269775 604.854736328125 -23.23525428771973 586.2996826171875 C -34.83005523681641 567.613525390625 -44.87071990966797 548.259765625 -53.07818603515625 528.7759399414062 C -61.41218948364258 508.9917907714844 -67.94952392578125 488.8492431640625 -72.50859069824219 468.9080505371094 C -75.17005157470703 457.2669982910156 -76.65445709228516 446.1197814941406 -76.92045593261719 435.7759094238281 C -77.04952239990234 430.7559204101562 -76.89552307128906 425.8051147460938 -76.46258544921875 421.0610046386719 C -76.03939056396484 416.4239196777344 -75.33699035644531 411.8446044921875 -74.37485504150391 407.4503173828125 C -73.43631744384766 403.1637878417969 -72.22205352783203 398.9227294921875 -70.76578521728516 394.8450012207031 C -69.34858703613281 390.8765869140625 -67.65831756591797 386.9404602050781 -65.7421875 383.1459350585938 C -62.09245300292969 375.9185791015625 -57.42605590820312 368.8292541503906 -51.87285614013672 362.0749816894531 C -46.66498947143555 355.7409973144531 -40.69098663330078 349.6546020507812 -33.6093864440918 343.4680480957031 C -27.25778770446777 337.9192504882812 -20.12485504150391 332.3916625976562 -11.80325412750244 326.5695190429688 C 3.730878829956055 315.7013854980469 20.85861206054688 305.5872497558594 38.9920768737793 294.8791198730469 C 63.97087860107422 280.1287231445312 89.80007934570312 264.8761901855469 113.9719467163086 246.1273956298828 C 127.0576782226562 235.9775238037109 138.3486175537109 225.8312530517578 148.4900817871094 215.1088562011719 C 154.01220703125 209.2704620361328 159.2326049804688 203.1969909667969 164.0064849853516 197.0572509765625 C 169.0336761474609 190.5915222167969 173.7347412109375 183.8352508544922 177.9788818359375 176.9759216308594 C 193.9828796386719 151.1108551025391 211.0776824951172 123.7907257080078 228.6410064697266 99.08112335205078 C 237.7791442871094 86.22512817382812 246.3774108886719 74.98712158203125 254.9274139404297 64.72525787353516 C 264.3695373535156 53.3924560546875 273.4999389648438 43.54632568359375 282.8402099609375 34.62405776977539 C 292.7526245117188 25.15539169311523 302.9403381347656 16.75939178466797 313.1202087402344 9.669524192810059 C 318.4512939453125 5.956724643707275 323.9219360351562 2.501391172409058 329.3800659179688 -0.6006087064743042 C 334.9815368652344 -3.783808708190918 340.7452697753906 -6.694608688354492 346.5114135742188 -9.2520751953125 C 352.4151306152344 -11.87060832977295 358.5039367675781 -14.19967555999756 364.6083374023438 -16.17460823059082 C 370.8467407226562 -18.19274139404297 377.2923583984375 -19.90300941467285 383.7660827636719 -21.25754165649414 C 390.3711547851562 -22.63940811157227 397.205810546875 -23.69327545166016 404.0802001953125 -24.38954162597656 C 411.0839538574219 -25.09887504577637 418.3396911621094 -25.45847511291504 425.6460876464844 -25.45847511291504 C 433.3283386230469 -25.45847511291504 441.3003540039062 -25.06100845336914 449.3406066894531 -24.27700805664062 C 457.5160827636719 -23.47980880737305 466.0064697265625 -22.25914192199707 474.5758056640625 -20.64914131164551 C 483.2794189453125 -19.01380920410156 492.3231506347656 -16.92820930480957 501.4559326171875 -14.45007514953613 C 510.7220764160156 -11.93580913543701 520.3541870117188 -8.943008422851562 530.0845947265625 -5.555141925811768 C 554.5924682617188 2.978057861328125 579.3326416015625 12.89072418212891 603.617919921875 23.90752410888672 C 629.0822143554688 35.45912551879883 654.1244506835938 48.26352310180664 678.0491333007812 61.96499252319336 C 703.2933959960938 76.42205810546875 727.526611328125 92.01499176025391 750.075439453125 108.3103256225586 C 773.9347534179688 125.5527267456055 796.247802734375 143.8304595947266 816.394775390625 162.6353912353516 C 826.8943481445312 172.4356536865234 836.9838256835938 182.5487213134766 846.3829956054688 192.6936645507812 C 856.0530395507812 203.130859375 865.2462158203125 213.8759307861328 873.707275390625 224.6304626464844 C 882.4089965820312 235.6908569335938 890.5673828125 247.0549926757812 897.955810546875 258.4071350097656 C 905.5509033203125 270.0768432617188 912.5359497070312 282.0468444824219 918.717041015625 293.98486328125 C 925.0675659179688 306.2503356933594 930.7410278320312 318.8135375976562 935.5796508789062 331.3253784179688 C 940.5484619140625 344.1734008789062 944.7720947265625 357.3169860839844 948.1334228515625 370.3909912109375 C 951.5830078125 383.8087158203125 954.21875 397.5204467773438 955.9671630859375 411.1451110839844 C 957.7606201171875 425.1199340820312 958.669921875 439.3876647949219 958.669921875 453.5517883300781 C 958.669921875 459.4239196777344 958.3392944335938 465.1839294433594 957.68701171875 470.6716613769531 C 957.0484619140625 476.0431213378906 956.083251953125 481.3114013671875 954.8180541992188 486.3299255371094 C 953.58154296875 491.23486328125 952.02197265625 496.0462036132812 950.1824951171875 500.6300659179688 C 948.3876953125 505.1027221679688 946.2732543945312 509.4920654296875 943.897705078125 513.6759033203125 C 941.5843505859375 517.7503051757812 938.9539184570312 521.75244140625 936.0796508789062 525.5709838867188 C 933.2872924804688 529.2807006835938 930.1796875 532.929931640625 926.8433837890625 536.4171142578125 C 920.5042114257812 543.04296875 913.0128784179688 549.4171142578125 904.5772705078125 555.3624877929688 C 896.6965942382812 560.916748046875 888.0130004882812 566.1309814453125 878.0304565429688 571.3031005859375 C 869.1110229492188 575.9244384765625 859.3355712890625 580.413818359375 848.1455688476562 585.0275268554688 C 827.314208984375 593.616455078125 805.3767700195312 601.0879516601562 782.1514282226562 608.9981689453125 C 736.4694213867188 624.556884765625 689.2322387695312 640.645263671875 651.0771484375 665.840576171875 C 637.435302734375 674.8487548828125 622.9579467773438 686.5869750976562 607.6307373046875 699.0144653320312 C 593.1751708984375 710.735107421875 578.2274169921875 722.8548583984375 561.4288940429688 734.920166015625 C 542.2525024414062 748.6935424804688 524.0758056640625 759.8726196289062 505.8603515625 769.096435546875 C 495.25634765625 774.466064453125 484.4116821289062 779.2728881835938 473.627685546875 783.383544921875 C 461.9690246582031 787.8275146484375 449.9582214355469 791.6200561523438 437.9288635253906 794.6556396484375 C 425.0755310058594 797.8992309570312 411.7716674804688 800.3876342773438 398.3871459960938 802.0516357421875 C 384.2046203613281 803.8148803710938 369.4807434082031 804.708984375 354.6246032714844 804.708984375 Z" />
            <path
              d="M 425.6462097167969 -24.9586181640625 C 418.3565979003906 -24.9586181640625 411.11767578125 -24.59979248046875 404.1307373046875 -23.89208984375 C 397.273681640625 -23.19769287109375 390.4564819335938 -22.1466064453125 383.8686218261719 -20.7681884765625 C 377.4122009277344 -19.41729736328125 370.9838256835938 -17.711669921875 364.7623596191406 -15.6988525390625 C 358.6744689941406 -13.72943115234375 352.6022033691406 -11.4066162109375 346.7142028808594 -8.79498291015625 C 340.9632873535156 -6.24432373046875 335.21435546875 -3.34100341796875 329.6272583007812 -0.16595458984375 C 324.1821899414062 2.928466796875 318.724609375 6.37567138671875 313.4060668945312 10.07977294921875 C 303.2471313476562 17.15496826171875 293.0795288085938 25.53460693359375 283.185546875 34.98565673828125 C 273.859130859375 43.89459228515625 264.7415161132812 53.72723388671875 255.3115234375 65.0452880859375 C 246.7698364257812 75.2972412109375 238.1791381835938 86.5252685546875 229.048583984375 99.370849609375 C 211.49365234375 124.0682983398438 194.40380859375 151.380859375 178.404052734375 177.239013671875 C 174.150634765625 184.1134033203125 169.4392700195312 190.8844604492188 164.401123046875 197.3641967773438 C 159.6175537109375 203.5166015625 154.386474609375 209.602294921875 148.853271484375 215.4524536132812 C 138.694091796875 226.1936645507812 127.3844604492188 236.3567504882812 114.2783203125 246.5224609375 C 90.08154296875 265.2907104492188 64.23846435546875 280.5513916015625 39.246337890625 295.3096618652344 C 21.12139892578125 306.0127258300781 4.001708984375 316.1221923828125 -11.5166015625 326.979248046875 C -19.8233642578125 332.7909851074219 -26.94244384765625 338.3076477050781 -33.28045654296875 343.8446044921875 C -40.34124755859375 350.0128479003906 -46.29644775390625 356.0799255371094 -51.486572265625 362.392578125 C -57.0166015625 369.1184692382812 -61.66259765625 376.1767272949219 -65.2957763671875 383.3712463378906 C -67.20269775390625 387.1473999023438 -68.88470458984375 391.0643310546875 -70.29498291015625 395.0131225585938 C -71.74407958984375 399.0709838867188 -72.95245361328125 403.2913818359375 -73.886474609375 407.5572509765625 C -75.8218994140625 416.3973999023438 -76.674560546875 425.8872680664062 -76.42059326171875 435.7631225585938 C -76.155517578125 446.0737915039062 -74.67523193359375 457.1878051757812 -72.021240234375 468.7966003417969 C -67.46856689453125 488.7096557617188 -60.940185546875 508.8243408203125 -52.61737060546875 528.581787109375 C -44.4200439453125 548.0416259765625 -34.39154052734375 567.3720703125 -22.810302734375 586.0360717773438 C -11.30963134765625 604.570556640625 1.83795166015625 622.63525390625 16.26715087890625 639.7284545898438 C 30.72247314453125 656.8524780273438 46.60675048828125 673.1703491210938 63.4788818359375 688.22900390625 C 80.528076171875 703.445556640625 98.76593017578125 717.5360717773438 117.6859741210938 730.109130859375 C 136.95556640625 742.9146118164062 157.1633911132812 754.2980346679688 177.7481079101562 763.9434204101562 C 198.8533935546875 773.8325805664062 220.6475219726562 782.0302124023438 242.525390625 788.3087158203125 C 265.07421875 794.7796630859375 288.0720825195312 799.3137817382812 310.8801879882812 801.78515625 C 325.7244873046875 803.3935546875 340.4421997070312 804.208984375 354.6246032714844 804.208984375 C 369.4600830078125 804.208984375 384.1632690429688 803.316162109375 398.3255310058594 801.5555419921875 C 411.6896667480469 799.89404296875 424.97314453125 797.4095458984375 437.8066101074219 794.1708374023438 C 449.817138671875 791.1400756835938 461.8091430664062 787.3533935546875 473.4496765136719 782.9163208007812 C 484.2175598144531 778.8119506835938 495.0460815429688 774.0120849609375 505.6346130371094 768.6503295898438 C 523.826904296875 759.4383544921875 541.9820556640625 748.272216796875 561.137451171875 734.5140380859375 C 577.924072265625 722.4571533203125 592.865966796875 710.342041015625 607.31591796875 698.6259155273438 C 622.6528930664062 686.1906127929688 637.139404296875 674.4450073242188 650.8013916015625 665.4232788085938 C 689.0100708007812 640.1925659179688 736.2783203125 624.0938110351562 781.9901123046875 608.5248413085938 C 805.2079467773438 600.6172485351562 827.1380615234375 593.148193359375 847.9548950195312 584.5652465820312 C 859.1314086914062 579.9571533203125 868.8939208984375 575.4737548828125 877.8003540039062 570.8592529296875 C 887.7626342773438 565.697509765625 896.4273071289062 560.494873046875 904.2891235351562 554.9537963867188 C 912.698486328125 549.0269775390625 920.165283203125 542.674072265625 926.4820556640625 536.071533203125 C 929.8048706054688 532.5984497070312 932.8995361328125 528.96435546875 935.6802368164062 525.2703247070312 C 938.5416870117188 521.4688720703125 941.1600952148438 517.48486328125 943.462890625 513.4291381835938 C 945.827392578125 509.2645874023438 947.9320678710938 504.8958129882812 949.718505859375 500.4439086914062 C 951.549560546875 495.8807373046875 953.1022338867188 491.0910034179688 954.333251953125 486.2077941894531 C 955.59326171875 481.2099304199219 956.5546264648438 475.9629821777344 957.1904907226562 470.6125793457031 C 957.84033203125 465.1444702148438 958.169921875 459.4043273925781 958.169921875 453.5517883300781 C 958.169921875 439.4088439941406 957.261962890625 425.16259765625 955.4712524414062 411.2087097167969 C 953.7254028320312 397.6044616699219 951.0936889648438 383.9132690429688 947.649169921875 370.5155334472656 C 944.292724609375 357.46044921875 940.0751342773438 344.3356628417969 935.1134033203125 331.5056457519531 C 930.28125 319.0107116699219 924.6152954101562 306.4642028808594 918.2728881835938 294.2147216796875 C 912.0995483398438 282.2913818359375 905.1228637695312 270.3357849121094 897.5367431640625 258.6797790527344 C 890.156494140625 247.3401794433594 882.0068969726562 235.9883422851562 873.3143310546875 224.9396362304688 C 864.861572265625 214.1956787109375 855.6771240234375 203.4608764648438 846.0162353515625 193.0333862304688 C 836.6253051757812 182.8973999023438 826.5443725585938 172.79296875 816.0535278320312 163.0008544921875 C 795.9218139648438 144.2100830078125 773.625 125.94580078125 749.782470703125 108.7155151367188 C 727.2479248046875 92.43048095703125 703.0296630859375 76.84722900390625 677.80078125 62.39874267578125 C 653.8895263671875 48.70513916015625 628.8614501953125 35.90789794921875 603.4112548828125 24.36273193359375 C 579.1397705078125 13.3521728515625 554.413818359375 3.44525146484375 529.9202270507812 -5.0830078125 C 520.2007446289062 -8.4671630859375 510.5799560546875 -11.45635986328125 501.3250122070312 -13.967529296875 C 492.2048645019531 -16.44219970703125 483.174072265625 -18.5250244140625 474.4835510253906 -20.1578369140625 C 465.9286193847656 -21.76513671875 457.4530029296875 -22.98370361328125 449.2922058105469 -23.7794189453125 C 441.2679443359375 -24.56195068359375 433.3123474121094 -24.9586181640625 425.6462097167969 -24.9586181640625 M 425.646240234375 -25.95855712890625 C 456.3257446289062 -25.95855712890625 490.8243713378906 -19.75433349609375 530.2490234375 -6.02740478515625 C 722.3195190429688 60.84820556640625 959.169921875 222.6967163085938 959.169921875 453.5517883300781 C 959.169921875 597.3734130859375 765.1904907226562 591.086181640625 651.3524780273438 666.2578125 C 588.0260620117188 708.0746459960938 511.1102905273438 805.2089233398438 354.6246643066406 805.2089233398438 C 340.6521911621094 805.2089233398438 326.0609741210938 804.435791015625 310.7724609375 802.7792358398438 C 124.2598266601562 782.5703125 -36.01715087890625 630.7633666992188 -72.99603271484375 469.01953125 C -109.97509765625 307.2756652832031 92.19329833984375 314.6690063476562 177.5536499023438 176.7128295898438 C 245.3928833007812 67.0738525390625 306.860107421875 -25.95855712890625 425.646240234375 -25.95855712890625 Z" />
          </clipPath>
        </svg>
        <iframe class="absolute" width="1420" height="800" src="https://www.youtube.com/embed/6ylAWAfUHVk?autoplay=1&controls=0&rel=0&loop=1&playlist=6ylAWAfUHVk" frameborder="0"></iframe>
      </div>
    </div>
  );
}

export default Introduction;
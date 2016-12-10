'use strict';

const input = `EXGPFSKT(4275x11)(700x12)(33x7)(13x10)YMNCBPTTVSYJF(8x3)ZLNSMHML(654x8)(80x11)(73x12)(46x13)(6x2)GZBCMO(14x11)WSLOVGSEUQSCOU(9x5)PTZEOKTCV(14x9)(9x3)RWHPLNBSW(559x12)(7x6)ECGZJKJ(116x6)(3x6)QRI(10x7)ZELLLAFGTR(86x4)(2x12)JF(22x11)EGZDZZFDMNIPSTKFJPCAHC(7x12)FPOYHGL(2x1)NL(23x7)WXBBFTECULOIUVRQNSUEHCY(183x7)(74x3)(4x5)GYKH(8x13)TEHMVNOW(5x14)WYXEW(33x10)MMSQVRGIKPIKBMDVFYUIJVITMMRAOEBQO(18x14)(11x10)ZAJBGEUSGVC(58x6)(27x11)OQBORSQLXCJWWMQPXPRULKTXLIO(18x7)ALNIJHLTLOXUFGFADH(8x13)EJCAKUNR(81x14)(74x12)(7x8)WLDRUDW(4x13)ORTI(1x6)D(22x3)AZHREXMWYUDXGVONIIKQJD(12x1)FMCSOJICPMCX(139x2)(5x8)KBPOT(16x5)(10x2)ONBEZABRPW(13x14)(8x9)RCIWSSPW(46x13)(9x3)SVLAKYMSZ(12x7)LBZJIJKABYJW(9x7)XRMROBHUO(28x9)(21x10)HSBTOHZLXPXMDHKCLIZNO(28x15)(21x11)XPNWQSKYYKPCIBVXVGGEA(1646x5)(719x13)(75x3)(25x4)DFMNLGPWRZEPXIXVKMNOKOHLU(37x10)(31x2)(1x4)E(10x10)XDVOAGCQPS(3x2)WBY(194x1)(37x8)(30x11)(16x13)TJMYJWLNSVVTJIZU(1x11)J(46x10)(27x9)HUAFNEBKKXVZKXQZSRPPQPRHFER(8x2)(3x4)XLZ(32x12)(25x13)(18x13)HOQIRUQBNZIFGDEAZZ(3x7)HZP(45x5)IJOFPXBMNLEZMFFTIPCVTIMXWYPGWIIKHXUWQWTAJYKJA(61x10)(54x12)(15x12)LCIGFYOKGRQCMRR(26x1)RJHMEFCWCZATOWWSEAKJDBLRDW(361x14)(16x5)JKQPFKKPXYMLHMDS(5x6)BFPHP(102x12)(58x10)(1x12)O(1x15)P(26x4)OXPTIJMNDCIMDEIMJGEMCKOOXX(6x12)VRTINZ(30x15)(2x8)OH(7x10)JYAVMNQ(4x12)PWRQ(28x6)(11x5)TBFSTOREUDV(6x5)WIMHZH(178x4)(9x7)(4x9)BEBJ(9x7)(3x13)ZYT(79x1)(14x9)AFXRFZGFMAQAGK(12x1)RHKJWFDUOBZM(12x2)UUMDTFGWMSTI(16x11)MQYBNNSKVREPNFFH(15x7)PBLFBVHHLWUTZUL(38x2)(13x4)GRQKWRIHKSIUA(2x5)UX(6x13)OFCYUJ(912x3)(330x3)(4x6)CZOF(313x10)(72x13)(8x7)NQFXMGRF(18x4)YWVHOTNROCDFIBHUJC(28x12)MPOIGQVEYBGYMZHJZBQRQRTAGKEG(56x8)(2x10)QH(6x1)ERSBGM(24x6)CAPYVJCWPFTOWXGXGVAHLZKU(2x8)MF(82x7)(3x1)WFM(4x5)RWGJ(25x8)ZGYCHFCKSQTHQQYTCZACXIHBE(5x10)PXKMA(17x4)CRVDERSIDHWZMVUYA(34x8)(28x2)FNXLBLNQIAGFTPCMLYBVYRFEIPJG(37x10)(5x2)THXHX(14x15)XGPLXZGKZBXJPI(1x3)I(179x6)(6x6)HZSKYK(50x3)(32x13)(5x10)VZKDL(4x3)PRHF(7x1)PREOWOU(5x13)LVVJL(105x3)(11x7)XFLDVQDYPZN(63x6)(19x12)KIBXJQKQWQJBFDMNKRL(31x3)ZDTPHEXZUKFLYROFZIKOKDTEUWAFUBK(12x11)FEIOHBUHOQGL(19x15)(12x10)SEODPOPKDOZJ(4x4)JBPF(347x4)(131x14)(56x10)(14x11)ILUNXGLXEZYRYS(20x5)NKFKCYSSTFEHMUPJOIDG(3x13)TYL(62x2)(1x14)O(8x2)JBFPALMC(16x2)NWMKTVWTJWCUOMST(13x10)PCETXVEEISPXL(34x10)GBUSPXTCJGGSWKOGABZSDYTTVTCJNVDIDG(13x12)OFVRQHOMTZTRT(6x7)CZZKDI(129x6)(39x5)(23x5)HMGZFDKYHBVHRYEFDYQVRVT(5x6)ZZQTO(3x7)ZMT(4x3)HMXK(60x10)(7x4)TWQTPGY(41x15)YIVNPYAOROKEZWECJMMKRDJBBVIGZLLQMTBFMLGWY(4x8)ZYON(1860x12)(987x6)(592x10)(167x10)(104x4)(16x13)YLYAAFMPWUADLLAA(26x1)QGJCGUAESHZXRGDLVIMAJHJFEK(13x4)JZSTUHASJWQLF(24x8)XWHGLLMMJOPBDBNZIOWIPVOF(23x11)CSQLVALTRGFJTPQLDFLUHDL(9x5)(3x13)ATH(7x5)WFSADAG(130x9)(53x9)(9x10)FEMVPYZZE(21x10)MQQIROZEBCGCHUSXMDGWG(4x10)BVNJ(27x13)GBIEDUINCXYPVIBQMMZVOFINIAJ(31x2)(14x6)FCBZIDBBMKMNWC(6x7)OEEWAM(51x11)(2x15)TW(5x7)CXFTR(11x11)XBQRDAHLCLT(2x14)SH(1x11)C(83x2)(77x6)(1x13)A(17x6)EWLJMXWWHKCPXKXYX(15x12)SCGDQSHOUQJSUJW(10x9)XZKRTFCZGT(4x2)QSPO(126x7)(27x1)LSDKCBKMHTMTVMRDDCXJBEZWMZZ(13x10)UKSZQOQTTAFTF(10x3)(5x9)CTCXT(2x10)PQ(43x1)(37x9)XSLWUXQHTAEYPEAZHZRWHCSBATQYLNWAXIZFZ(1x5)R(374x7)(167x12)(54x6)XBMBHMJCDGMKJNQNVMTBYKJAKZSZUBGUXIOMUGOXLUAOTUZSLBAUUY(2x2)KD(28x8)(9x5)QJAGYOCIM(8x14)SLUYWRFK(60x5)(1x12)Y(33x6)HHIGXAQGEPVUEPNHKSSKUMONLYKELNLQI(8x13)CPKZBJXB(192x1)(46x3)(17x11)YRPCRLQDUGCUWSSXL(8x1)ZCUZOYJE(3x14)YPU(79x5)(33x10)MPUPPXIEFXGWMULKTYHDOAGDHLJHRRRCJ(1x12)E(7x1)TZOVONQ(14x3)KMXWRLKYTTVCWU(49x4)(8x10)VMPCJQXL(15x1)SKVVHKKMHDIQUQJ(2x3)HY(2x9)ZG(11x4)XFNOZSNBKRK(465x12)(18x5)GEXOEINBKUNFIOLURE(419x13)(119x4)(26x10)(4x2)UALR(10x12)SIIWBAUPWM(59x6)(43x5)SKTSLHJOATIMRUUTOKGTPUCWRWLEYEYDKVJBQOPMXTR(5x3)JFPZT(3x8)GXX(7x15)UVIQZJB(2x10)XJ(24x11)TPOQLQZKFCYXOXVFSLIJVECQ(246x12)(12x3)NZIQPEKTVARU(54x9)(3x9)NPB(11x10)AGJZXFHZLLH(7x12)LPQHVGY(2x11)AA(1x12)I(59x3)(1x1)S(19x7)WPUSQHIOZKQFOWHYDFA(14x3)URKCWDSQAEYPCI(2x14)NC(61x4)(5x7)TKVYH(4x2)PDVV(2x9)HG(17x6)GVOAMZYJQOXAQJGSQ(7x7)CLLMQWC(29x15)(16x1)GDUOOMNVGYUOSQYB(2x6)RU(8x15)EJYAJQGY(369x1)(361x14)(21x1)YJBFRFVNNZCCYFKRBYYVC(156x12)(7x14)YHUFOAM(2x11)XP(29x6)(8x4)CZSYISLG(4x10)HLDW(1x4)S(10x4)WNCMYPKQFT(77x15)(5x8)UGNME(18x12)URSWKSHFWAFOXIMZPB(5x7)QZERF(2x7)OV(19x1)NOLPFVRRIEVYQVSZDJS(150x8)(5x8)OIINF(12x8)KVCJZIRYKXUY(73x11)(2x7)LA(8x2)LMEXVNOI(10x1)NTMQYFFNBZ(4x7)WTDE(22x5)DXWNDKGMHYGACWOBAYJRNY(36x8)(4x10)FKHP(19x15)NEQXWUKWXWTTCCVQYYL(7x14)WSBOVTP(3038x7)(41x14)(22x12)ZWNVASWZGVOIKWCODFMDCI(6x15)YYYSHD(789x13)(13x1)(8x9)EVGUCHWQ(510x6)(119x13)(111x13)(6x11)QDRYAJ(16x5)RKAMGLXAVFFTPEBZ(20x2)QFUGELMPXRQDCWEHRJEY(44x15)(2x8)VK(2x2)HD(7x14)RWTSNSB(10x12)EWQQLCJCPC(6x3)AGWELW(364x14)(11x11)(5x11)DKNHQ(59x3)(19x9)OTEFEVUKQZGSTFRVYWP(9x2)LDGOBKPTQ(13x12)(7x14)ADLOZYC(137x8)(56x10)(2x6)RW(7x15)HUFOIGT(18x8)HARMVPJZRJXJNGZDPO(6x11)PCUKHL(67x10)(28x11)PCNQWAATCRKZFHVZNHXYUUPYFWVF(1x14)V(1x12)S(12x6)YQQZXVTFDVTJ(130x5)(8x12)WYIJMHHZ(3x6)SQB(14x3)(9x1)HGWVWOFXQ(10x7)QGKSPZKEXQ(66x2)(3x6)IND(7x3)TKRQCXL(18x1)MYODGXLSNEWKNSUZYX(10x4)MOKRMBZEHQ(1x3)Q(245x13)(230x14)(222x13)(19x4)(6x15)UBRZZX(2x8)TE(58x4)(4x9)DPLV(8x1)SIDQXUSD(1x10)X(23x4)HZYITSFYWXIORUCZZCMDSGL(91x9)(8x9)JNCNQVES(10x1)CLUYCEZAOA(3x3)XJO(20x14)BUZUTQDYTQXYAZYTJDQV(20x13)KOCADZBCUGHFESCAKGOK(16x13)AWJNJIZCSGXFBJXI(7x11)(1x13)F(2x1)BK(1711x14)(223x8)(215x15)(178x4)(29x9)MAGFORTGLLSMMWMJEUHFFNFBCRMSC(5x6)NFCYQ(16x13)QNCOOJIQIYABASQS(96x11)(2x15)EQ(43x13)GLKEUOLATIDSXLGUHFIORRWTRRINCFXLJATSVCJNNSO(17x15)HBCIUUHVYSZNVGMRN(8x10)GFVPTGYM(2x8)TE(1x12)N(17x1)EZTFYIDDINVGFYSEP(780x13)(353x15)(3x4)MGC(10x7)SCWQDZWYAB(92x14)(8x4)(2x15)NX(6x14)(1x8)C(60x14)(15x3)BRXCIFTLUEAIBRO(9x5)NOLTRVJOA(6x12)FMSVCV(7x14)DQAMZQX(215x3)(68x7)(8x14)TAXQBMFZ(21x15)OITWZKZBCMVBOYYFHNBPL(6x6)QEPQIC(3x2)SNT(1x12)B(55x7)(5x9)VKRLX(13x14)UDHUZCEUVBXJO(8x4)RJJKLLAH(6x14)OHIDTS(4x14)ITYG(21x5)(1x1)W(1x4)I(4x6)KILC(36x14)(11x14)RITTDRXXDLP(11x10)PRDGKVIFDUI(2x11)CM(182x8)(51x12)(7x2)BWELDSV(3x10)JEY(11x10)GVLHUJMDTVT(6x14)WACVKS(117x6)(63x10)(9x15)MKTMWEPXC(5x10)JABHS(24x9)MJJYMDBMKCASLIXDCGWSXUIN(2x6)SW(7x12)AMOCBKG(27x10)XDVHHIKNMPJXAIOREECWPNVMVKS(223x5)(99x1)(7x2)CBMGYMO(53x3)(15x6)BAAOTMWHHNHEZGJ(5x13)DUGTH(15x4)JAUKYJRIORHNRAB(6x11)MAPRYB(10x3)IAJYWAFXIM(111x3)(5x10)MCBCA(36x6)(6x4)LZEYPF(10x13)AQUBHKOLTE(2x13)AK(52x5)(7x14)DDRKRNY(10x5)VFHONXKURX(4x9)UKUY(8x15)NIYAUWGP(686x7)(61x8)(55x5)(8x13)(3x4)XJS(12x12)(6x10)WLUSDF(3x10)XKP(8x1)SFCVKSLY(2x3)CP(237x14)(229x11)(81x14)(7x8)UBVPDAG(13x8)MXAHYLCWDKPIH(17x5)SLTNXXKTFVARXXBGO(13x5)BDCRYEZKXFXEY(2x14)TA(58x11)(36x6)QVITJPANFEIDLDUEIBNICBSMEQZBSWQQVGCT(1x5)T(5x5)SFCVM(58x4)(16x1)MATNEXLFWYFTUWWR(8x3)RASBWVWX(3x14)XXY(8x11)XNLOMORW(1x9)Y(1x3)I(359x11)(89x4)(25x14)(1x12)O(11x11)SAQDRZJGAUU(8x11)CKZTLZUY(8x7)(3x2)DFZ(7x7)MOQCZTS(11x10)LHFKTDYZQSD(88x11)(53x4)(1x5)C(10x5)BERUOONCSJ(1x3)C(19x8)WBDYTHXMQQCLVSEISTT(23x5)LLZRCXQVHLWBCUKVQVFXBQY(162x5)(57x7)(4x10)XALW(9x9)QNJMMYHCM(12x15)BTRLEFIHQMRT(9x2)UPAWFPMKE(3x6)SCQ(3x15)YTZ(75x14)(16x11)SBPEWETWXGVTZUXO(4x5)HZQX(11x14)FZCDGEVIZEE(6x5)KVPGOQ(8x12)ONZPWNCS(51x13)(45x2)(39x7)(24x8)(17x11)(11x1)CHNDNHXBFHN(4x3)CXJB(407x13)(400x1)(132x8)(6x13)LKTZZI(9x2)YLBLZKYPS(99x13)(3x9)NOZ(17x12)(11x2)IATQCUARWUM(2x7)CK(43x12)(8x14)CMFYZEHC(7x5)YROKKKP(3x5)HQF(4x8)GNJK(4x10)PHJF(1x5)Z(54x2)(47x10)(18x10)ZCTVFHIVURCAJRKCDQ(15x11)HBIPKLREYNWUHMO(188x6)(79x3)(11x8)KZGMRZELKER(27x15)RYOMUMMRJVSQTHUKKLTAEYWAQTW(22x8)(1x6)V(3x5)EWY(3x9)FYV(9x11)DNKDAJFBY(70x15)(17x15)(11x1)DJXXFHRAKPL(26x6)(4x5)FAGX(10x11)EBFOAWIEQP(9x9)IJLKNETCB(5x15)ABQPQ(579x3)(29x7)(9x5)GTXCFXTKP(9x14)(3x14)VRS(537x7)(529x11)(344x2)(66x12)(7x9)(2x2)CT(21x13)(4x11)TTXD(6x1)OAFJIF(13x3)CBXPZYOGHJSWG(1x13)M(50x2)(14x15)(2x7)NL(2x1)XZ(23x6)(16x15)GTNPUPURKNMRRWQF(6x7)HWPRNW(197x5)(5x4)EYQWV(75x11)(8x15)UPJHYIQU(36x5)GWMIZBKNPLDITWVHWHXHJAUEEMCBGUWUMMHX(12x12)NPQXLMXAKXFJ(98x10)(1x13)W(10x6)LWLZRSBXOA(9x5)HQZGJGYGG(6x9)IFSNXI(44x3)UKFXTYRNYULHXGQPTKZDMTTSSNNBHVGXJLSMUPLGBVPN(170x14)(11x8)MGIYKALHMUW(146x8)(4x1)PMBT(12x14)(7x2)DPFEWXT(13x14)JMIYORYVYZJGS(39x3)NCXKUQBUBUPRPNGMBJULZJFRNHHZZPXPZHDQDBX(46x15)(6x10)RBICQU(6x5)LJUDIP(1x10)B(10x3)LMMIYYDXMV(24x6)(9x5)VDCHYSMAQ(4x10)XZGCLMPFRW`;

function decompress() {
  let i = 0;
  let length = 0;
  const result = [];
  const regexp = /\([0-9]+x[0-9]+\)/;
  for (let j = 0; j < input.length; j++) {
    result[j] = 1;
  }
  while(i < result.length) {
    if (input[i] === '(') {
      const expression = input.slice(i).match(regexp)[0];
      const nbChar = parseInt(expression.split('x')[0].slice(1));
      const repet = parseInt(expression.split('x')[1]
        .slice(0,expression.split('x')[1].length -1));
      i += expression.length;
      for (let j = i; j < i + nbChar; ++j) {
        result[j] *= repet;
      }
    } else length += result[i++];

  }

  console.log(length);
}

decompress();

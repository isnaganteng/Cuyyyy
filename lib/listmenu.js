const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Owner Menu 』
┆❏.bc 🅞
┆❏.join 🅞
┆❏.creategc 🅞
┆❏.shutdown 🅞
┆❏.autodltt 🅞
┆❏.autosticker 🅞
┆❏.setppbot 🅞
┆❏.addprem 🅞
┆❏.delprem 🅞
┆❏.addowner 🅞
┆❏.delowner 🅞
┆❏.addlist 🅞
┆❏.dellist 🅞
┆❏.updatelist 🅞
┆❏.listnya 🅞
┆❏.addvn 🅞
┆❏.delvn 🅞
┆❏.listvn 🅞
┆❏.ban add 🅞
┆❏.ban del 🅞
╰–––––––––––––––༓

╭––『 Artificial Intelegince 』
┆❏.aiimage 🅕
┆❏.ai 🅕
┆❏.remini 🅟
┆❏.unblur 🅟
┆❏.jadianime 🅟
┆❏.jadianime2 🅟
┆❏.drawme 🅟
┆❏.aianime 🅟
┆❏.aidraw 🅟
┆❏.animedif 🅟
┆❏.arcane 🅟
┆❏.art 🅟
┆❏.comics 🅟
┆❏.disney 🅟
┆❏.jojo 🅟
┆❏.renaissance 🅟
┆❏.yasuo 🅟
╰–––––––––––––––༓

╭––『 Download Menu 』
┆❏.tiktokvideo 🅕
┆❏.tiktokaudio 🅕
┆❏.ytsearch 🅕
┆❏.mediafire 🅕
┆❏.instagram 🅕
┆❏.facebook 🅕
┆❏.play 🅕
┆❏.mp3 🅕
┆❏.mp4 🅕
┆❏.googles 🅕
┆❏.happymod 🅕
╰–––––––––––––––༓

╭––『 Group Menu 』
┆❏.antilink 🅖
┆❏.antiwame 🅖
┆❏.add 🅖
┆❏.kick 🅖
┆❏.promote 🅖
┆❏.demote 🅖
┆❏.hidetag 🅖
┆❏.tagall 🅖
┆❏.group 🅖
┆❏.opentime 🅖
┆❏.closetime 🅖
┆❏.setppgroup 🅖
╰–––––––––––––––༓

╭––『 Random Video 』
┆❏.asupan 🅟
┆❏.bocil 🅟
┆❏.rikagusriani 🅟
┆❏.hentaivid 🅟
┆❏.jjmeryani 🅟
╰–––––––––––––––༓

╭––『 Stalker 』
┆❏.igstalk 🅟
┆❏.ffstalk 🅟
┆❏.mlstalk 🅟
┆❏.npmstalk 🅟
┆❏.ghstalk 🅟
╰–––––––––––––––༓

╭––『 Random Quotes 』
┆❏.bijak 🅟
┆❏.dare 🅟
┆❏.fakta 🅟
┆❏.motivasi 🅟
┆❏.pantun 🅟
┆❏.quotes 🅟
┆❏.quotesanime 🅟
┆❏.truth 🅟
╰–––––––––––––––༓

╭––『 Other Menu 』
┆❏.owner 🅕
┆❏.jadibot 🅟
┆❏.listjadibot 🅟
┆❏.donasi 🅕
┆❏.listpremium 🅕
┆❏.buypremium 🅕
┆❏.jadiowner 🅕
┆❏.sewabot 🅕
┆❏.halah 🅕
┆❏.hilih 🅕
┆❏.huluh 🅕
┆❏.heleh 🅕
┆❏.holoh 🅕
┆❏.cekme 🅕
┆❏.obfus 🅕
┆❏.styletext 🅕
┆❏.tts 🅕
┆❏.tourl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.smeme 🅕
┆❏.snobg 🅕
┆❏.menfes 🅕
┆❏.leave 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.cariresep 🅕
┆❏.bacaresep 🅕
┆❏.ssweb 🅕
┆❏.wasted 🅕
┆❏.comrade 🅕
┆❏.horny 🅕
┆❏.blur 🅕
┆❏.pixelate 🅕
┆❏.simpcard 🅕
┆❏.lolice 🅕
┆❏.gay 🅕
┆❏.jail 🅕
┆❏.cry 🅟
┆❏.kill 🅟
┆❏.hug 🅟
┆❏.pat 🅟
┆❏.lick 🅟 
┆❏.kiss 🅟
┆❏.bite 🅟
┆❏.yeet 🅟
┆❏.bully 🅟
┆❏.bonk 🅟
┆❏.wink 🅟
┆❏.poke 🅟
┆❏.nom 🅟
┆❏.slap 🅟
┆❏.smile 🅟 
┆❏.wave 🅟
┆❏.awoo 🅟
┆❏.blush 🅟
┆❏.smug 🅟
┆❏.glomp 🅟 
┆❏.happy 🅟
┆❏.dance 🅟
┆❏.cringe 🅟
┆❏.cuddle 🅟
┆❏.highfive 🅟 
┆❏.shinobu 🅟
┆❏.handhold 🅟
┆❏.quoted 🅕
┆❏.caridoi 🅟
┆❏.cariteman 🅟
╰–––––––––––––––༓

╭––『 Fun Menu 』
┆❏.memek 🅖
┆❏.bego 🅖
┆❏.goblok 🅖
┆❏.janda 🅖
┆❏.perawan 🅖
┆❏.babi 🅖
┆❏.tolol 🅖
┆❏.pinter 🅖
┆❏.pintar 🅖
┆❏.asu 🅖
┆❏.bodoh 🅖
┆❏.gay 🅖
┆❏.lesby 🅖
┆❏.bajingan 🅖
┆❏.jancok 🅖
┆❏.anjing 🅖
┆❏.ngentod 🅖
┆❏.ngentot 🅖
┆❏.monyet 🅖
┆❏.mastah 🅖
┆❏.newbie 🅖
┆❏.bangsat 🅖
┆❏.bangke 🅖
┆❏.sange 🅖
┆❏.sangean 🅖
┆❏.dakjal 🅖
┆❏.horny 🅖
┆❏.wibu 🅖
┆❏.puki 🅖
┆❏.peak 🅖
┆❏.pantex 🅖
┆❏.pantek 🅖
┆❏.setan 🅖
┆❏.iblis 🅖
┆❏.cacat 🅖
┆❏.yatim 🅖
┆❏.piatu 🅖
┆❏.goblokcek 🅖
┆❏.jelekcek 🅖
┆❏.gaycek 🅖
┆❏.rate 🅖
┆❏.lesbicek 🅖
┆❏.gantengcek 🅖
┆❏.cantikcek 🅖
┆❏.begocek 🅖
┆❏.suhucek 🅖
┆❏.pintercek 🅖
┆❏.jagocek 🅖
┆❏.nolepcek 🅖
┆❏.babicek 🅖
┆❏.bebancek 🅖
┆❏.baikcek 🅖
┆❏.jahatcek 🅖
┆❏.anjingcek 🅖
┆❏.haramcek 🅖
┆❏.pakboycek 🅖
┆❏.pakgirlcek 🅖
┆❏.sangecek 🅖
┆❏.bapercek 🅖
┆❏.fakboycek 🅖
┆❏.alimcek 🅖
┆❏.suhucek 🅖
┆❏.fakgirlcek 🅖
┆❏.kerencek 🅖
┆❏.wibucek 🅖
┆❏.pasarkascek 🅖
┆❏.kulcek 🅖                
┆❏.cekgoblok 🅖
┆❏.cekjelek 🅖
┆❏.cekgay 🅖                
┆❏.ceklesbi 🅖
┆❏.cekganteng 🅖
┆❏.cekcantik 🅖
┆❏.cekbego 🅖
┆❏.ceksuhu 🅖
┆❏.cekpinter 🅖
┆❏.cekjago 🅖
┆❏.ceknolep 🅖
┆❏.cekbabi 🅖
┆❏.cekbeban 🅖
┆❏.cekbaik 🅖
┆❏.cekjahat 🅖
┆❏.cekanjing 🅖
┆❏.cekharam 🅖
┆❏.cekpakboy 🅖
┆❏.cekpakgirl 🅖
┆❏.ceksange 🅖
┆❏.cekbaper 🅖
┆❏.cekfakboy 🅖
┆❏.cekalim 🅖
┆❏.ceksuhu 🅖
┆❏.cekfakgirl 🅖
┆❏.cekkeren 🅖
┆❏.cekwibu 🅖
┆❏.cekpasarkas 🅖
┆❏.cekkul 🅖
┆❏.cekbapak 🅖
╰–––––––––––––––༓

╭––『 Random Foto 』
┆❏.aesthetic 🅟
┆❏.ahegao 🅟
┆❏.akira 🅟
┆❏.akiyama 🅟
┆❏.ana 🅟
┆❏.anjing 🅟
┆❏.art 🅟
┆❏.ass 🅟
┆❏.asuna 🅟
┆❏.ayuzawa 🅟
┆❏.bdsm 🅟
┆❏.boneka 🅟
┆❏.boruto 🅟
┆❏.bts 🅟
┆❏.cecan 🅟
┆❏.chiho 🅟
┆❏.chitoge 🅟
┆❏.cogan 🅟
┆❏.cosplay 🅟
┆❏.cosplayloli 🅟
┆❏.cosplaysagiri 🅟
┆❏.cuckold 🅟
┆❏.cum 🅟
┆❏.cyber 🅟
┆❏.darkjokes 🅟
┆❏.deidara 🅟
┆❏.doraemon 🅟
┆❏.eba 🅟
┆❏.elaina 🅟
┆❏.emilia 🅟
┆❏.ero 🅟
┆❏.erza 🅟
┆❏.exo 🅟
┆❏.femdom 🅟
┆❏.foot 🅟
┆❏.freefire 🅟
┆❏.gamewallpaper 🅟
┆❏.gangbang 🅟
┆❏.gifs 🅟
┆❏.glasses 🅟
┆❏.gremory 🅟
┆❏.hekel 🅟
┆❏.hentai 🅟
┆❏.hestia 🅟
┆❏.hijaber 🅟
┆❏.hinata 🅟
┆❏.husbu 🅟
┆❏.inori 🅟
┆❏.islamic 🅟
┆❏.isuzu 🅟
┆❏.itachi 🅟
┆❏.itori 🅟
┆❏.jahy 🅟
┆❏.jeni 🅟
┆❏.jiso 🅟
┆❏.justina 🅟
┆❏.kaga 🅟
┆❏.kagura 🅟
┆❏.kakasih 🅟
┆❏.kaori 🅟
┆❏.kartun 🅟
┆❏.katakata 🅟
┆❏.keneki 🅟
┆❏.kotori 🅟
┆❏.kpop 🅟
┆❏.kucing 🅟
┆❏.kurumi 🅟
┆❏.lisa 🅟
┆❏.loli 🅟
┆❏.madara 🅟
┆❏.masturbation 🅟
┆❏.megumin 🅟
┆❏.mikasa 🅟
┆❏.mikey 🅟
┆❏.miku 🅟
┆❏.milf 🅟
┆❏.minato 🅟
┆❏.mobil 🅟
┆❏.motor 🅟
┆❏.mountain 🅟
┆❏.naruto 🅟
┆❏.neko 🅟
┆❏.neko2 🅟
┆❏.nekonime 🅟
┆❏.nezuko 🅟
┆❏.onepiece 🅟
┆❏.orgy 🅟
┆❏.panties 🅟
┆❏.pentol 🅟
┆❏.pokemon 🅟
┆❏.profil 🅟
┆❏.programming 🅟
┆❏.pubg 🅟
┆❏.pussy 🅟
┆❏.randblackpink 🅟
┆❏.randomnime 🅟
┆❏.randomnime2 🅟
┆❏.rize 🅟
┆❏.rose 🅟
┆❏.ryujin 🅟
┆❏.sagiri 🅟
┆❏.sakura 🅟
┆❏.sasuke 🅟
┆❏.satanic 🅟
┆❏.shina 🅟
┆❏.shinka 🅟
┆❏.shinomiya 🅟
┆❏.shizuka 🅟
┆❏.shota 🅟
┆❏.tatasurya 🅟
┆❏.technology 🅟
┆❏.tejina 🅟
┆❏.tentacles 🅟
┆❏.thighs 🅟
┆❏.toukachan 🅟
┆❏.tsunade 🅟
┆❏.waifu 🅟
┆❏.wallhp 🅟
┆❏.wallml 🅟
┆❏.wallnime 🅟
┆❏.yotsuba 🅟
┆❏.yuki 🅟
┆❏.yulibocil 🅟
┆❏.yumeko 🅟
┆❏.fox 🅟  
┆❏.dog 🅟  
┆❏.cat 🅟
┆❏.panda 🅟  
┆❏.birb 🅟 
┆❏.koala 🅟
┆❏.china 🅟
┆❏.indonesia 🅟
┆❏.japan 🅟
┆❏.korea 🅟
┆❏.malaysia 🅟
┆❏.thailand 🅟
┆❏.vietnam 🅟
╰–––––––––––––––༓

╭––『 Textpro Maker 』
┆❏.candy 🅟 
┆❏.christmas 🅟 
┆❏.3dchristmas 🅟 
┆❏.sparklechristmas 🅟
┆❏.deepsea 🅟 
┆❏.scifi 🅟 
┆❏.rainbow 🅟 
┆❏.waterpipe 🅟 
┆❏.spooky 🅟 
┆❏.pencil 🅟 
┆❏.circuit 🅟 
┆❏.discovery 🅟 
┆❏.metalic 🅟 
┆❏.fiction 🅟 
┆❏.demon 🅟 
┆❏.transformer 🅟 
┆❏.berry 🅟 
┆❏.thunder 🅟 
┆❏.magma 🅟 
┆❏.3dstone 🅟 
┆❏.neonlight 🅟 
┆❏.glitch 🅟 
┆❏.harrypotter 🅟 
┆❏.brokenglass 🅟 
┆❏.papercut 🅟 
┆❏.watercolor 🅟 
┆❏.multicolor 🅟 
┆❏.neondevil 🅟 
┆❏.underwater 🅟 
┆❏.graffitibike 🅟
┆❏.snow 🅟 
┆❏.cloud 🅟 
┆❏.honey 🅟 
┆❏.ice 🅟 
┆❏.fruitjuice 🅟 
┆❏.biscuit 🅟 
┆❏.wood 🅟 
┆❏.chocolate 🅟 
┆❏.strawberry 🅟 
┆❏.matrix 🅟 
┆❏.blood 🅟 
┆❏.dropwater 🅟 
┆❏.toxic 🅟 
┆❏.lava 🅟 
┆❏.rock 🅟 
┆❏.bloodglas 🅟 
┆❏.hallowen 🅟 
┆❏.darkgold 🅟 
┆❏.joker 🅟 
┆❏.wicker 🅟
┆❏.firework 🅟 
┆❏.skeleton 🅟 
┆❏.blackpink 🅟 
┆❏.sand 🅟 
┆❏.glue 🅟 
┆❏.1917 🅟 
┆❏.leaves 🅟
╰–––––––––––––––༓

╭––『 PhotoOxy Maker 』
┆❏.shadow 🅟 
┆❏.write 🅟 
┆❏.romantic 🅟 
┆❏.burnpaper 🅟
┆❏.smoke 🅟 
┆❏.narutobanner 🅟 
┆❏.love 🅟 
┆❏.undergrass 🅟
┆❏.doublelove 🅟 
┆❏.coffecup 🅟
┆❏.underwaterocean 🅟
┆❏.smokyneon 🅟
┆❏.starstext 🅟
┆❏.rainboweffect 🅟
┆❏.balloontext 🅟
┆❏.metalliceffect 🅟
┆❏.embroiderytext 🅟
┆❏.flamingtext 🅟
┆❏.stonetext 🅟
┆❏.writeart 🅟
┆❏.summertext 🅟
┆❏.wolfmetaltext 🅟
┆❏.nature3dtext 🅟
┆❏.rosestext 🅟
┆❏.naturetypography 🅟
┆❏.quotesunder 🅟
┆❏.shinetext 🅟
╰–––––––––––––––༓

╭––『 Ephoto360 Maker 』
┆❏.glitchtext 🅟
┆❏.writetext 🅟
┆❏.advancedglow 🅟
┆❏.typographytext 🅟
┆❏.pixelglitch 🅟
┆❏.neonglitch 🅟
┆❏.flagtext 🅟
┆❏.flag3dtext 🅟
┆❏.deletingtext 🅟
┆❏.blackpinkstyle 🅟
┆❏.glowingtext 🅟
┆❏.underwatertext 🅟
┆❏.logomaker 🅟
┆❏.cartoonstyle 🅟
┆❏.papercutstyle 🅟
┆❏.watercolortext 🅟
┆❏.effectclouds 🅟
┆❏.blackpinklogo 🅟
┆❏.gradienttext 🅟
┆❏.summerbeach 🅟
┆❏.luxurygold 🅟
┆❏.multicoloredneon 🅟
┆❏.sandsummer 🅟
┆❏.galaxywallpaper 🅟
┆❏.1917style 🅟
┆❏.makingneon 🅟
┆❏.royaltext 🅟
┆❏.freecreate 🅟
┆❏.galaxystyle 🅟
┆❏.lighteffects 🅟
╰–––––––––––––––༓

╭––『 Random Cerpen 』
┆❏.cerpen_sejarah 🅟
┆❏.cerpen_sedih 🅟
┆❏.cerpen_sastra 🅟
┆❏.cerpen_romantis 🅟
┆❏.cerpen_rohani 🅟
┆❏.cerpen_rindu 🅟
┆❏.cerpen_remaja 🅟
┆❏.cerpen_ramadhan 🅟
┆❏.cerpen_petualangan 🅟
┆❏.cerpen_persahabatan 🅟
┆❏.cerpen_perpisahan 🅟
┆❏.cerpen_perjuangan 🅟
┆❏.cerpen_penyesalan 🅟
┆❏.cerpen_pengorbanan 🅟
┆❏.cerpen_pengalaman 🅟
┆❏.cerpen_pendidikan 🅟
┆❏.cerpen_penantian 🅟
┆❏.cerpen_patahhati 🅟
┆❏.cerpen_olahraga 🅟
┆❏.cerpen_nasionalisme 🅟
┆❏.cerpen_nasihat 🅟
┆❏.cerpen_motivasi 🅟
┆❏.cerpen_misteri 🅟
┆❏.cerpen_mengharukan 🅟
┆❏.cerpen_malaysia 🅟
┆❏.cerpen_liburan 🅟
┆❏.cerpen_kristen 🅟
┆❏.cerpen_korea 🅟
┆❏.cerpen_kisahnyata 🅟
┆❏.cerpen_keluarga 🅟
┆❏.cerpen_kehidupan 🅟
┆❏.cerpen_jepang 🅟
┆❏.cerpen_inspiratif 🅟
┆❏.cerpen_gokil 🅟
┆❏.cerpen_galau 🅟
┆❏.cerpen_cintasejati 🅟
┆❏.cerpen_cintasegitiga 🅟
┆❏.cerpen_cintasedih 🅟
┆❏.cerpen_cintaromantis 🅟
┆❏.cerpen_cintapertama 🅟
┆❏.cerpen_cintaislami 🅟
┆❏.cerpen_cinta 🅟
┆❏.cerpen_budaya 🅟
┆❏.cerpen_bahasasunda 🅟
┆❏.cerpen_bahasajawa 🅟
┆❏.cerpen_bahasainggris 🅟
┆❏.cerpen_bahasadaerah 🅟
┆❏.cerpen_anak 🅟
╰–––––––––––––––༓
`}



global.aimenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Artificial Intelegince 』
┆❏.aiimage 
┆❏.ai 
┆❏.remini 
┆❏.unblur 
┆❏.jadianime 
┆❏.jadianime2 
┆❏.drawme 
┆❏.aianime 
┆❏.aidraw
┆❏.animedif 
┆❏.arcane
┆❏.art
┆❏.comics
┆❏.disney
┆❏.jojo
┆❏.renaissance
┆❏.yasuo
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Owner Menu 』
┆❏.bc 🅞
┆❏.join 🅞
┆❏.creategc 🅞
┆❏.shutdown 🅞
┆❏.autodltt 🅞
┆❏.autosticker 🅞
┆❏.setppbot 🅞
┆❏.addprem 🅞
┆❏.delprem 🅞
┆❏.addowner 🅞
┆❏.delowner 🅞
┆❏.addlist 🅞
┆❏.dellist 🅞
┆❏.updatelist 🅞
┆❏.listnya 🅞
┆❏.addvn 🅞
┆❏.delvn 🅞
┆❏.listvn 🅞
┆❏.banadd 🅞
┆❏.bandel 🅞
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Other Menu 』
┆❏.owner 🅕
┆❏.jadibot 🅟
┆❏.listjadibot 🅟
┆❏.donasi 🅕
┆❏.listpremium 🅕
┆❏.buypremium 🅕
┆❏.jadiowner 🅕
┆❏.sewabot 🅕
┆❏.halah 🅕
┆❏.hilih 🅕
┆❏.huluh 🅕
┆❏.heleh 🅕
┆❏.holoh 🅕
┆❏.cekme 🅕
┆❏.obfus 🅕
┆❏.styletext 🅕
┆❏.tts 🅕
┆❏.tourl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.smeme 🅕
┆❏.snobg 🅕
┆❏.menfes 🅕
┆❏.leave 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.cariresep 🅕
┆❏.bacaresep 🅕
┆❏.ssweb 🅕
┆❏.wasted 🅕
┆❏.comrade 🅕
┆❏.horny 🅕
┆❏.blur 🅕
┆❏.pixelate 🅕
┆❏.simpcard 🅕
┆❏.lolice 🅕
┆❏.gay 🅕
┆❏.jail 🅕
┆❏.cry 🅟
┆❏.kill 🅟
┆❏.hug 🅟
┆❏.pat 🅟
┆❏.lick 🅟 
┆❏.kiss 🅟
┆❏.bite 🅟
┆❏.yeet 🅟
┆❏.bully 🅟
┆❏.bonk 🅟
┆❏.wink 🅟
┆❏.poke 🅟
┆❏.nom 🅟
┆❏.slap 🅟
┆❏.smile 🅟 
┆❏.wave 🅟
┆❏.awoo 🅟
┆❏.blush 🅟
┆❏.smug 🅟
┆❏.glomp 🅟 
┆❏.happy 🅟
┆❏.dance 🅟
┆❏.cringe 🅟
┆❏.cuddle 🅟
┆❏.highfive 🅟 
┆❏.shinobu 🅟
┆❏.handhold 🅟
┆❏.quoted 🅕
┆❏.caridoi 🅟
┆❏.cariteman 🅟
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Download Menu 』
┆❏.tiktokvideo 🅕
┆❏.tiktokaudio 🅕
┆❏.ytsearch 🅕
┆❏.mediafire 🅕
┆❏.play 🅕
┆❏.ytmp3 🅕
┆❏.ytmp4 🅕
┆❏.googles 🅕
┆❏.happymod 🅕
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Group Menu 』
┆❏.antilink 🅖
┆❏.antiwame 🅖
┆❏.add 🅖
┆❏.kick 🅖
┆❏.promote 🅖
┆❏.demote 🅖
┆❏.hidetag 🅖
┆❏.tagall 🅖
┆❏.group 🅖
┆❏.opentime 🅖
┆❏.closetime 🅖
┆❏.setppgroup 🅖
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Fun Menu 』
┆❏.memek 🅖
┆❏.bego 🅖
┆❏.goblok 🅖
┆❏.janda 🅖
┆❏.perawan 🅖
┆❏.babi 🅖
┆❏.tolol 🅖
┆❏.pinter 🅖
┆❏.pintar 🅖
┆❏.asu 🅖
┆❏.bodoh 🅖
┆❏.gay 🅖
┆❏.lesby 🅖
┆❏.bajingan 🅖
┆❏.jancok 🅖
┆❏.anjing 🅖
┆❏.ngentod 🅖
┆❏.ngentot 🅖
┆❏.monyet 🅖
┆❏.mastah 🅖
┆❏.newbie 🅖
┆❏.bangsat 🅖
┆❏.bangke 🅖
┆❏.sange 🅖
┆❏.sangean 🅖
┆❏.dakjal 🅖
┆❏.horny 🅖
┆❏.wibu 🅖
┆❏.puki 🅖
┆❏.peak 🅖
┆❏.pantex 🅖
┆❏.pantek 🅖
┆❏.setan 🅖
┆❏.iblis 🅖
┆❏.cacat 🅖
┆❏.yatim 🅖
┆❏.piatu 🅖
┆❏.goblokcek 🅖
┆❏.jelekcek 🅖
┆❏.gaycek 🅖
┆❏.rate 🅖
┆❏.lesbicek 🅖
┆❏.gantengcek 🅖
┆❏.cantikcek 🅖
┆❏.begocek 🅖
┆❏.suhucek 🅖
┆❏.pintercek 🅖
┆❏.jagocek 🅖
┆❏.nolepcek 🅖
┆❏.babicek 🅖
┆❏.bebancek 🅖
┆❏.baikcek 🅖
┆❏.jahatcek 🅖
┆❏.anjingcek 🅖
┆❏.haramcek 🅖
┆❏.pakboycek 🅖
┆❏.pakgirlcek 🅖
┆❏.sangecek 🅖
┆❏.bapercek 🅖
┆❏.fakboycek 🅖
┆❏.alimcek 🅖
┆❏.suhucek 🅖
┆❏.fakgirlcek 🅖
┆❏.kerencek 🅖
┆❏.wibucek 🅖
┆❏.pasarkascek 🅖
┆❏.kulcek 🅖                
┆❏.cekgoblok 🅖
┆❏.cekjelek 🅖
┆❏.cekgay 🅖                
┆❏.ceklesbi 🅖
┆❏.cekganteng 🅖
┆❏.cekcantik 🅖
┆❏.cekbego 🅖
┆❏.ceksuhu 🅖
┆❏.cekpinter 🅖
┆❏.cekjago 🅖
┆❏.ceknolep 🅖
┆❏.cekbabi 🅖
┆❏.cekbeban 🅖
┆❏.cekbaik 🅖
┆❏.cekjahat 🅖
┆❏.cekanjing 🅖
┆❏.cekharam 🅖
┆❏.cekpakboy 🅖
┆❏.cekpakgirl 🅖
┆❏.ceksange 🅖
┆❏.cekbaper 🅖
┆❏.cekfakboy 🅖
┆❏.cekalim 🅖
┆❏.ceksuhu 🅖
┆❏.cekfakgirl 🅖
┆❏.cekkeren 🅖
┆❏.cekwibu 🅖
┆❏.cekpasarkas 🅖
┆❏.cekkul 🅖
┆❏.cekbapak 🅖
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Stalker Menu 』
┆❏.igstalk 🅟
┆❏.ffstalk 🅟
┆❏.mlstalk 🅟
┆❏.npmstalk 🅟
┆❏.ghstalk 🅟
╰–––––––––––––––༓
`}

global.randfotomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Random Foto 』
┆❏.aesthetic 🅟
┆❏.ahegao 🅟
┆❏.akira 🅟
┆❏.akiyama 🅟
┆❏.ana 🅟
┆❏.anjing 🅟
┆❏.art 🅟
┆❏.ass 🅟
┆❏.asuna 🅟
┆❏.ayuzawa 🅟
┆❏.bdsm 🅟
┆❏.boneka 🅟
┆❏.boruto 🅟
┆❏.bts 🅟
┆❏.cecan 🅟
┆❏.chiho 🅟
┆❏.chitoge 🅟
┆❏.cogan 🅟
┆❏.cosplay 🅟
┆❏.cosplayloli 🅟
┆❏.cosplaysagiri 🅟
┆❏.cuckold 🅟
┆❏.cum 🅟
┆❏.cyber 🅟
┆❏.darkjokes 🅟
┆❏.deidara 🅟
┆❏.doraemon 🅟
┆❏.eba 🅟
┆❏.elaina 🅟
┆❏.emilia 🅟
┆❏.ero 🅟
┆❏.erza 🅟
┆❏.exo 🅟
┆❏.femdom 🅟
┆❏.foot 🅟
┆❏.freefire 🅟
┆❏.gamewallpaper 🅟
┆❏.gangbang 🅟
┆❏.gifs 🅟
┆❏.glasses 🅟
┆❏.gremory 🅟
┆❏.hekel 🅟
┆❏.hentai 🅟
┆❏.hestia 🅟
┆❏.hijaber 🅟
┆❏.hinata 🅟
┆❏.husbu 🅟
┆❏.inori 🅟
┆❏.islamic 🅟
┆❏.isuzu 🅟
┆❏.itachi 🅟
┆❏.itori 🅟
┆❏.jahy 🅟
┆❏.jeni 🅟
┆❏.jiso 🅟
┆❏.justina 🅟
┆❏.kaga 🅟
┆❏.kagura 🅟
┆❏.kakasih 🅟
┆❏.kaori 🅟
┆❏.kartun 🅟
┆❏.katakata 🅟
┆❏.keneki 🅟
┆❏.kotori 🅟
┆❏.kpop 🅟
┆❏.kucing 🅟
┆❏.kurumi 🅟
┆❏.lisa 🅟
┆❏.loli 🅟
┆❏.madara 🅟
┆❏.masturbation 🅟
┆❏.megumin 🅟
┆❏.mikasa 🅟
┆❏.mikey 🅟
┆❏.miku 🅟
┆❏.milf 🅟
┆❏.minato 🅟
┆❏.mobil 🅟
┆❏.motor 🅟
┆❏.mountain 🅟
┆❏.naruto 🅟
┆❏.neko 🅟
┆❏.neko2 🅟
┆❏.nekonime 🅟
┆❏.nezuko 🅟
┆❏.onepiece 🅟
┆❏.orgy 🅟
┆❏.panties 🅟
┆❏.pentol 🅟
┆❏.pokemon 🅟
┆❏.profil 🅟
┆❏.programming 🅟
┆❏.pubg 🅟
┆❏.pussy 🅟
┆❏.randblackpink 🅟
┆❏.randomnime 🅟
┆❏.randomnime2 🅟
┆❏.rize 🅟
┆❏.rose 🅟
┆❏.ryujin 🅟
┆❏.sagiri 🅟
┆❏.sakura 🅟
┆❏.sasuke 🅟
┆❏.satanic 🅟
┆❏.shina 🅟
┆❏.shinka 🅟
┆❏.shinomiya 🅟
┆❏.shizuka 🅟
┆❏.shota 🅟
┆❏.tatasurya 🅟
┆❏.technology 🅟
┆❏.tejina 🅟
┆❏.tentacles 🅟
┆❏.thighs 🅟
┆❏.toukachan 🅟
┆❏.tsunade 🅟
┆❏.waifu 🅟
┆❏.wallhp 🅟
┆❏.wallml 🅟
┆❏.wallnime 🅟
┆❏.yotsuba 🅟
┆❏.yuki 🅟
┆❏.yulibocil 🅟
┆❏.yumeko 🅟
┆❏.fox 🅟  
┆❏.dog 🅟  
┆❏.cat 🅟
┆❏.panda 🅟  
┆❏.birb 🅟 
┆❏.koala 🅟
┆❏.china 🅟
┆❏.indonesia 🅟
┆❏.japan 🅟
┆❏.korea 🅟
┆❏.malaysia 🅟
┆❏.thailand 🅟
┆❏.vietnam 🅟
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Random Video 』
┆❏.asupan 🅟
┆❏.bocil 🅟
┆❏.rikagusriani 🅟
┆❏.hentaivid 🅟
┆❏.jjmeryani 🅟
╰–––––––––––––––༓
`}

global.textpromenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Textpro Maker 』
┆❏.candy 🅟 
┆❏.christmas 🅟 
┆❏.3dchristmas 🅟 
┆❏.sparklechristmas 🅟
┆❏.deepsea 🅟 
┆❏.scifi 🅟 
┆❏.rainbow 🅟 
┆❏.waterpipe 🅟 
┆❏.spooky 🅟 
┆❏.pencil 🅟 
┆❏.circuit 🅟 
┆❏.discovery 🅟 
┆❏.metalic 🅟 
┆❏.fiction 🅟 
┆❏.demon 🅟 
┆❏.transformer 🅟 
┆❏.berry 🅟 
┆❏.thunder 🅟 
┆❏.magma 🅟 
┆❏.3dstone 🅟 
┆❏.neonlight 🅟 
┆❏.glitch 🅟 
┆❏.harrypotter 🅟 
┆❏.brokenglass 🅟 
┆❏.papercut 🅟 
┆❏.watercolor 🅟 
┆❏.multicolor 🅟 
┆❏.neondevil 🅟 
┆❏.underwater 🅟 
┆❏.graffitibike 🅟
┆❏.snow 🅟 
┆❏.cloud 🅟 
┆❏.honey 🅟 
┆❏.ice 🅟 
┆❏.fruitjuice 🅟 
┆❏.biscuit 🅟 
┆❏.wood 🅟 
┆❏.chocolate 🅟 
┆❏.strawberry 🅟 
┆❏.matrix 🅟 
┆❏.blood 🅟 
┆❏.dropwater 🅟 
┆❏.toxic 🅟 
┆❏.lava 🅟 
┆❏.rock 🅟 
┆❏.bloodglas 🅟 
┆❏.hallowen 🅟 
┆❏.darkgold 🅟 
┆❏.joker 🅟 
┆❏.wicker 🅟
┆❏.firework 🅟 
┆❏.skeleton 🅟 
┆❏.blackpink 🅟 
┆❏.sand 🅟 
┆❏.glue 🅟 
┆❏.1917 🅟 
┆❏.leaves 🅟
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 PhotoOxy Maker 』
┆❏.shadow 🅟 
┆❏.write 🅟 
┆❏.romantic 🅟 
┆❏.burnpaper 🅟
┆❏.smoke 🅟 
┆❏.narutobanner 🅟 
┆❏.love 🅟 
┆❏.undergrass 🅟
┆❏.doublelove 🅟 
┆❏.coffecup 🅟
┆❏.underwaterocean 🅟
┆❏.smokyneon 🅟
┆❏.starstext 🅟
┆❏.rainboweffect 🅟
┆❏.balloontext 🅟
┆❏.metalliceffect 🅟
┆❏.embroiderytext 🅟
┆❏.flamingtext 🅟
┆❏.stonetext 🅟
┆❏.writeart 🅟
┆❏.summertext 🅟
┆❏.wolfmetaltext 🅟
┆❏.nature3dtext 🅟
┆❏.rosestext 🅟
┆❏.naturetypography 🅟
┆❏.quotesunder 🅟
┆❏.shinetext 🅟
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Ephoto360 Maker 』
┆❏.glitchtext 🅟
┆❏.writetext 🅟
┆❏.advancedglow 🅟
┆❏.typographytext 🅟
┆❏.pixelglitch 🅟
┆❏.neonglitch 🅟
┆❏.flagtext 🅟
┆❏.flag3dtext 🅟
┆❏.deletingtext 🅟
┆❏.blackpinkstyle 🅟
┆❏.glowingtext 🅟
┆❏.underwatertext 🅟
┆❏.logomaker 🅟
┆❏.cartoonstyle 🅟
┆❏.papercutstyle 🅟
┆❏.watercolortext 🅟
┆❏.effectclouds 🅟
┆❏.blackpinklogo 🅟
┆❏.gradienttext 🅟
┆❏.summerbeach 🅟
┆❏.luxurygold 🅟
┆❏.multicoloredneon 🅟
┆❏.sandsummer 🅟
┆❏.galaxywallpaper 🅟
┆❏.1917style 🅟
┆❏.makingneon 🅟
┆❏.royaltext 🅟
┆❏.freecreate 🅟
┆❏.galaxystyle 🅟
┆❏.lighteffects 🅟
╰–––––––––––––––༓
`}

global.cerpenmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Random Cerpen 』
┆❏.cerpen_sejarah 🅟
┆❏.cerpen_sedih 🅟
┆❏.cerpen_sastra 🅟
┆❏.cerpen_romantis 🅟
┆❏.cerpen_rohani 🅟
┆❏.cerpen_rindu 🅟
┆❏.cerpen_remaja 🅟
┆❏.cerpen_ramadhan 🅟
┆❏.cerpen_petualangan 🅟
┆❏.cerpen_persahabatan 🅟
┆❏.cerpen_perpisahan 🅟
┆❏.cerpen_perjuangan 🅟
┆❏.cerpen_penyesalan 🅟
┆❏.cerpen_pengorbanan 🅟
┆❏.cerpen_pengalaman 🅟
┆❏.cerpen_pendidikan 🅟
┆❏.cerpen_penantian 🅟
┆❏.cerpen_patahhati 🅟
┆❏.cerpen_olahraga 🅟
┆❏.cerpen_nasionalisme 🅟
┆❏.cerpen_nasihat 🅟
┆❏.cerpen_motivasi 🅟
┆❏.cerpen_misteri 🅟
┆❏.cerpen_mengharukan 🅟
┆❏.cerpen_malaysia 🅟
┆❏.cerpen_liburan 🅟
┆❏.cerpen_kristen 🅟
┆❏.cerpen_korea 🅟
┆❏.cerpen_kisahnyata 🅟
┆❏.cerpen_keluarga 🅟
┆❏.cerpen_kehidupan 🅟
┆❏.cerpen_jepang 🅟
┆❏.cerpen_inspiratif 🅟
┆❏.cerpen_gokil 🅟
┆❏.cerpen_galau 🅟
┆❏.cerpen_cintasejati 🅟
┆❏.cerpen_cintasegitiga 🅟
┆❏.cerpen_cintasedih 🅟
┆❏.cerpen_cintaromantis 🅟
┆❏.cerpen_cintapertama 🅟
┆❏.cerpen_cintaislami 🅟
┆❏.cerpen_cinta 🅟
┆❏.cerpen_budaya 🅟
┆❏.cerpen_bahasasunda 🅟
┆❏.cerpen_bahasajawa 🅟
┆❏.cerpen_bahasainggris 🅟
┆❏.cerpen_bahasadaerah 🅟
┆❏.cerpen_anak 🅟
╰–––––––––––––––༓
`}

global.randomtext = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

╭––『 Random Quotes 』
┆❏.bijak 🅟
┆❏.dare 🅟
┆❏.fakta 🅟
┆❏.motivasi 🅟
┆❏.pantun 🅟
┆❏.quotes 🅟
┆❏.quotesanime 🅟
┆❏.truth 🅟
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
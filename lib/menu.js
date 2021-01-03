const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://youtube.com/c/lowoijo
Instagram: https://instagram.com/ridho_setiawan02

Best regards, ridho.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Ola, ${pushname}! 👋️
Aqui estão alguns dos recursos deste bot!✨

CREADOR: wa.me/5581983678841
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

INLAN:
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*

18+:
-❥ *${prefix}nekopoi*

Menu divertido (GRUPO):
-❥ *${prefix}simisimi*
-❥ *${prefix}katakasar*
-❥ *${prefix}klasmen*

DOWNLOADS:
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*

PRINBOM:
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

PESQUISAR QUALQUER:
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*

PESQUISAR TEXTO:
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*
-❥ *${prefix}cerpen*
-❥ *${prefix}cersex*
-❥ *${prefix}puisi*

PESQUISA IMAGEM:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

OUTROS:
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*

SOBRE BARCOS:
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

OWNER BOTt:
-❥ *${prefix}ban* - banido
-❥ *${prefix}bc* - promoção
-❥ *${prefix}leaveall* - sair de todos os grupos
-❥ *${prefix}clearall* - deletar todos os chats

Espero que você tenha um ótimo dia!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Grupo* ] ⚠ 
A seguir estão os recursos de administração de grupo disponíveis neste bot!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Grupo de proprietários apenas* ] ⚠
Aqui estão os recursos do proprietário do grupo neste bot!
-❥ *${prefix}kickall*
*O grupo proprietário é um criador do grupo.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

via dana/pulsa : 081289096745
via shopeepay : bri 112082390009516 A.N ridho040203
via rekening BRI : 753501017096533 A.N : RIDHO SETIAWAN

NB : DONASI DARI KALIAN UNTUK PERKEMBANGAN BOT INI KEDEPANNYA, TETIMA KASIH

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -ridho`
}

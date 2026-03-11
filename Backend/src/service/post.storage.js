const ImageKit = require('@imagekit/nodejs')

const client = new ImageKit({
    privateKey:'private_M3rdPri748zDW6QdsIA4VkV/W6w='
})

function uploadFile(buffer){
    const result = client.files.upload({
        file:buffer.toString('base64'),
        fileName:'img.jpg'  
    })

    return result
}

module.exports = uploadFile
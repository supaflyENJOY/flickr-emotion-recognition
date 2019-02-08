import * as FacePP from 'face-plusplus-node'

export const initialize = (key: string, secret: string) => {
    FacePP.setApiKey(key)
    FacePP.setApiSecret(secret)
}

export function detect(options: any) {
    return new Promise(function(resolve, reject) {
        FacePP.post('/detect', options, function(err, res) {
            if(err)
                return reject(err)

            resolve(res)
        })
    })
}
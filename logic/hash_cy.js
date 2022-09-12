import sjcl from 'sjcl'

const hash={
  salt:"random",
  sha256:(a)=>{
    return(sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(a)))
  }
}

export default hash
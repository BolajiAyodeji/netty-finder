const NetworkDetect = function (phone) {
  this.phone = phone.toString().trim()
}

NetworkDetect.prototype = {
  getNetworks: function () {
    return {
      '9mobile': /^0(8(09|17|18)|90(8|9))/,
      MTN: /^0((7|8|9)0(3|6)|81(0|3|6|4))/,
      GLO: /^0(705|8(05|07|11|15)|905)/,
      Airtel: /^0(70(1|8)|8(02|08|12)|90(2|7))/,
      Starcomms: /^0(702(8|9)|819)/,
      Visafone: /^070(25|26|4)/,
      Multilinks: /^070(27|9)/,
      Zoom: /^0707/,
      Ntel: /^0804/,
      Smile: /^0702/,
    }
  },

  getNetworkName: function () {
    this.validate()

    // Find the first entry that matches the phone
    const [network, _] = Object.entries(this.getNetworks()).find(([_, regex]) => regex.test(this.phone)) || [null]

    return network
  },

  validate: function () {
    //Check that phone is a string
    if (typeof this.phone !== 'string') {
      throw new Error('Invalid entry, enter a telephone number')
    }

    //Check that phone contains only digits
    if (!/^\d+$/.test(this.phone)) {
      throw new Error('Number contains non-digits')
    }

    //Check if number is lesser than 11
    if (this.phone.length < 11) {
      throw new Error(
        'Number must not be lesser than 11 digits'
      )
    }

    //Check if number is greater than 11
    if (this.phone.length > 11) {
      throw new Error(
        'Number must not be greater than 11 digits'
      )
    }

    return true
  }
}

var hat = require('hat'),
    rack = hat.rack(bits=135, base=16),
    base58 = require('../lib/base58'),
    assert = require('assert');

describe('base58 with hat', function() {
    it('can encode and decode a hat id', function() {
        var r = rack(),
            b = new Buffer(r, 'hex'),
            e = base58.encode(b),
            d = new Buffer(base58.decode(e)).toString('hex');

        assert.strictEqual(d, r);
        assert.strictEqual(e.length, 24);
    })
})

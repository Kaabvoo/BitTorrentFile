'use strict'
import bencode from 'bencode'
import fs from "fs";
import dgram from "dgram";
import buffer from "buffer";
import url from "url";

const torrent = bencode.decode(fs.readFileSync('./Vampire Survivors (1.7.100) [amd64] [Multi] [Unity3D].torrent'));

console.log(bin2String(torrent['announce']));

function bin2String(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
  }

/*

const u = new URL(torrent['announce'].toString('utf-8'));

console.log(u);

const socket = dgram.createSocket('udp4');

const myMsg = buffer.Buffer.from('hello', 'utf-8');

socket.send(myMsg, 0, myMsg.length, u.port, u.host, () => {});

socket.on('message', msg => {
    console.log('message: ', msg);
});
/*

'use strict';
const fs = require('fs');
const bencode = require('bencode');
// 1
const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
// 2
const url = urlParse(torrent.announce.toString('utf8'));
*/
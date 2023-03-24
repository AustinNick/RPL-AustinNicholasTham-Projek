const Kalkulator = require('../helper/helper-austinnicholas');
const expect = require('chai').expect;

describe('Kalkulator', () => {
    describe('tambah', () => {
        it('Harus tambah 2 angka yang benar', () => {
            expect(Kalkulator.tambah(1, 2)).to.equal(3);
        });
    });
    describe('kurang', () => {
        it('Harus kurang 2 angka yang benar', () => {
            expect(Kalkulator.kurang(4, 3)).to.equal(1);
        });
    });
    describe('kali', () => {
        it('Harus kali 2 angka yang benar', () => {
            expect(Kalkulator.kali(5, 6)).to.equal(30);
        });
    });
    describe('bagi', () => {
        it('Harus bagi 2 angka yang benar', () => {
            expect(Kalkulator.bagi(10, 2)).to.equal(5);
        });
    });
});
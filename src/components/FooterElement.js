import React from 'react';
import Container from 'react-bootstrap/Container';

const FooterElement = () => {
    return (
        <Container>
            <footer class="d-flex flex-column py-3 my-4">
                <h3>The Parentings</h3>
                <div class="row row-cols-2 row-cols-sm-3 row-cols-md-5">
                    <div class="coll mt-3">
                        <h4 class="mb-3">Kehamilan</h4>
                        <p class="mb-2">Tips Kehamilan</p>
                        <p class="mb-2">Melahirkan</p>
                        <p class="mb-2">Menyusui</p>
                    </div>
                    <div class="coll mt-3">
                        <h4 class="mb-3">Kesehatan</h4>
                        <p class="mb-2">Info Kesehatan</p>
                        <p class="mb-2">Kebugaran</p>
                        <p class="mb-2">Vaksinasi</p>
                    </div>
                    <div class="coll mt-3">
                        <h4 class="mb-3">Tumbuh Kembang</h4>
                        <p class="mb-2">Bayi</p>
                        <p class="mb-2">Balita</p>
                        <p class="mb-2">Prasekolah</p>
                        <p class="mb-2">Praremaja</p>
                        <p class="mb-2">Usia Sekolah</p>
                    </div>
                    <div class="coll mt-3">
                        <h4 class="mb-3">Parenting</h4>
                        <p class="mb-2">Pernikahan</p>
                        <p class="mb-2">Keluarga</p>
                    </div>
                    <div class="coll mt-3">
                        <h4 class="mb-3">Makanan & Nutrisi</h4>
                        <p class="mb-2">Makanan Sehat</p>
                        <p class="mb-2">Minuman Sehat</p>
                    </div>
                </div>
            </footer>

            <p class="footerCopy">© Copyright 2022, Hak cipta oleh blog parenting </p>
        </Container>
    );
}

export default FooterElement;
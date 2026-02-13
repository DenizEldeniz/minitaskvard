# VardSec Mini Task

Bu proje, React Frontend ve .NET Backend kullanan, Docker ile konteynerize edilmiş bir full-stack web uygulamasıdır.

## 🚀 Projeyi Çalıştırma (Tek Komutla)

Bu projeyi çalıştırmak için bilgisayarınızda sadece **Docker Desktop** kurulu olması yeterlidir.

1.  Bu repoyu klonlayın veya indirin.
2.  Terminali açın ve proje klasörüne gidin.
3.  Şu komutu çalıştırın:

```bash
docker-compose up --build
```

Bu komut:
*   SQL Server
*   Backend API (.NET 9)
*   Frontend (React + Vite + Nginx)

servislerini sırasıyla ayağa kaldıracaktır.

## 🌐 Uygulamaya Erişim

Tüm servisler ayağa kalktıktan sonra:

*   **Frontend**: [http://localhost:5173](http://localhost:5173) adresinden erişebilirsiniz.
*   **Backend API**: [http://localhost:5129/api](http://localhost:5129/api) (veya Docker içinde `http://vard-mini-task-backend:8080`)
*   **Veritabanı**: Docker içinde `vard-mini-task` ismiyle çalışır.

## ⚙️ Yapılandırma ve Güvenlik

Proje **`.env`** dosyası üzerinden yapılandırılır.
> **Not:** Güvenlik gereği `.env` dosyası GitHub'a yüklenmemiştir. Projeyi çalıştırabilmek için kök dizinde bir `.env` dosyası oluşturun ve şu değerleri ekleyin:

**Örnek `.env` Dosyası:**

```env
SA_PASSWORD=GucluBirSifre123!
Jwt__Key=CokGizliVeUzunBirAnahtar32KarakterOlmali_123
```

*   `SA_PASSWORD`: Veritabanı `sa` kullanıcısının şifresi.
*   `Jwt__Key`: JWT token üretimi için kullanılan gizli anahtar (en az 32 karakter).

## 🛠️ Teknolojiler

*   **Frontend**: React, Vite, Nginx
*   **Backend**: .NET 9, Entity Framework Core
*   **Veritabanı**: Microsoft SQL Server
*   **Altyapı**: Docker & Docker Compose

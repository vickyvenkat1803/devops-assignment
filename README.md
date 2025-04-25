
# DevOps Assignment – Web Scraper + Flask API (Windows)

Scrapes a web page using Node.js and Puppeteer, then hosts the scraped data as JSON using a Flask API.

---

## 🔧 Features
- Scrapes dynamic content (title and first heading) from any URL
- Outputs JSON to a local file
- Flask server hosts the data on `localhost:5000`
- No Docker needed — runs natively on Windows

---

## 🧰 Tech Stack
- Node.js + Puppeteer
- Python 3 + Flask
- Windows 10/11

---

## 🚀 How to Run

### 1. Install Node.js packages
```bash
npm install
```

### 2. Scrape a website
```bash
set SCRAPE_URL=https://example.com
node scrape.js
```

### 3. Install Python packages
```bash
pip install flask
```

### 4. Run the Flask server
```bash
python server.py
```

### 5. Open in browser
```
http://localhost:5000/
```

---

## 📄 Example Output
```json
{
  "title": "Example Domain",
  "heading": "Example Domain"
}
```

---

## 👤 Author
**Venkatesan**  
Email: vickyvenkat1803@gmail.com  
GitHub: [vickyvenkat1803](https://github.com/vickyvenkat1803)  
LinkedIn: [linkedin.com/in/venkatesan1803](https://linkedin.com/in/venkatesan1803)

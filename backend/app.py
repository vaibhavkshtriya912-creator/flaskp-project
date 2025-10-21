from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/health", methods=["GET"])
def health():
    return {"status": "ok"}, 200

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json() or {}
    # Minimal processing: echo back what we received
    return jsonify({"ok": True, "received": data}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

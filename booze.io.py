from flask import Flask, request, jsonify
from flask import render_template
import serial

app = Flask(__name__)


@app.route('/')
def root():
    return render_template('index.html')
    # return app.send_static_file('index.html')

@app.route('/_test')
def test():
    print request.args.get('coc')
    return render_template('index.html')


@app.route('/booze')
def make_booze():
    try:
        ser = serial.Serial('/dev/ttyAMA0', 9600, timeout=1)
        ser.open()

        ser.write("test")
        res = response = ser.readline()
        print res

        ser.close()
    except Exception as e:
        print "somthing went wrong {}".format(e)
    return render_template('index.html')


@app.route('/_add_numbers')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    return jsonify(result=a + b)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)


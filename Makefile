SRC = $(shell find public/js/*.js public/js/*/*.js)

all: public/all.js public/all.min.js
	du public/all.*

public/all.js: $(SRC)
	cat $^ > $@

public/all.min.js: public/all.js
	uglifyjs -nc --no-mangle $< > $@

clean:
	rm -fr public/all.*

.PHONY: clean


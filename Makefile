SHELL := /bin/bash

.PHONY: help
help:
	@printf "available targets -->\n\n"
	@cat Makefile | grep ".PHONY" | grep -v ".PHONY: _" | sed 's/.PHONY: //g'


.PHONY: zip
zip:
	mkdir -p Assign\ 02/modules
	cp ./ngapp/src/main.ts ./Assign\ 02
	cp ./ngapp/src/modules/Product.ts ./Assign\ 02/modules
	cp ./ngapp/src/modules/ProductList.ts ./Assign\ 02/modules
	tree Assign\ 02
	zip -9 -r Assign_02.zip Assign\ 02/
	shasum -a 256 Assign_02.zip
	ls -la Assign_02.zip


.PHONY: copy_zip
copy_zip: zip
	cp Assign_02.zip /vagrant

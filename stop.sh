pushd apps/omnidata/dist
kill -9 $(ps aux | grep node | grep white-label | awk '{print $2}')
nhost down

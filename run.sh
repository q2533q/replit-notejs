cd ~/${REPL_SLUG}
./gost -L=127.0.0.1:88 > /dev/null 2>&1 & 
wstunnel -s 0.0.0.0:443 &
while true; 
do 
  curl "https://${REPL_SLUG}.${REPL_OWNER}.repl.co"
  sleep 100; 
done

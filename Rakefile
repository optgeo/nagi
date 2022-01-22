task :convert do
  sh <<-EOS
curl -O https://nagix.github.io/hakone-ekiden/style.json
charites convert style.json
rm style.json
  EOS
end

task :build do
  sh <<-EOS
charites build style.yml docs/style.json
  EOS
end

task :host do
  sh <<-EOS
budo -d docs
  EOS
end


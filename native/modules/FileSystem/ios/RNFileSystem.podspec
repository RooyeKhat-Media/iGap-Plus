
Pod::Spec.new do |s|
  s.name         = "RNFileSystem"
  s.version      = "1.0.0"
  s.summary      = "RNFileSystem"
  s.description  = <<-DESC
                  RNFileSystem
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNFileSystem.git", :tag => "master" }
  s.source_files  = "RNFileSystem/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  
# -*- encoding: utf-8 -*-
# stub: namor 0.4.2 ruby lib

Gem::Specification.new do |s|
  s.name = "namor".freeze
  s.version = "0.4.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jason May".freeze]
  s.date = "2012-09-10"
  s.description = "Munging English names".freeze
  s.email = ["jmay@pobox.com".freeze]
  s.homepage = "".freeze
  s.rubygems_version = "2.7.7".freeze
  s.summary = "Parse & extract pieces of names".freeze

  s.installed_by_version = "2.7.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>.freeze, ["~> 0.9.2"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 2.9.0"])
      s.add_development_dependency(%q<guard-rspec>.freeze, ["~> 0.7.0"])
      s.add_development_dependency(%q<ruby_gntp>.freeze, ["~> 0.3.4"])
    else
      s.add_dependency(%q<rake>.freeze, ["~> 0.9.2"])
      s.add_dependency(%q<rspec>.freeze, ["~> 2.9.0"])
      s.add_dependency(%q<guard-rspec>.freeze, ["~> 0.7.0"])
      s.add_dependency(%q<ruby_gntp>.freeze, ["~> 0.3.4"])
    end
  else
    s.add_dependency(%q<rake>.freeze, ["~> 0.9.2"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.9.0"])
    s.add_dependency(%q<guard-rspec>.freeze, ["~> 0.7.0"])
    s.add_dependency(%q<ruby_gntp>.freeze, ["~> 0.3.4"])
  end
end

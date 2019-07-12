require 'redmine'

Rails.logger.info 'Starting That Attachments Limit plugin for Redmine'

Redmine::Plugin.register :that_attachments_limit do
    name 'That Attachments Limit'
    author 'Andriy Lesyuk for That Company'
    author_url 'http://www.andriylesyuk.com/'
    description 'Allows to configure how many attachments can be uploaded at once.'
    url 'https://github.com/thatcompany/that_attachments_limit'
    version '0.0.1'

    settings :default => { 'attachments_limit' => 10 }, :partial => 'settings/attachments_limit'
end

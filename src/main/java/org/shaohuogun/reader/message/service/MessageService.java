package org.shaohuogun.reader.message.service;

import java.util.List;

import org.shaohuogun.common.Model;
import org.shaohuogun.common.Pagination;
import org.shaohuogun.reader.message.dao.ContentDao;
import org.shaohuogun.reader.message.dao.MessageDao;
import org.shaohuogun.reader.message.model.Content;
import org.shaohuogun.reader.message.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MessageService {

	@Autowired
	private MessageDao messageDao;

	@Autowired
	private ContentDao contentDao;

	@Transactional
	public Message createMessage(Message message) throws Exception {
		if (message == null) {
			throw new Exception("Invalid argument.");
		}

		Message oldMessage = messageDao.selectByUrl(message.getUrl());
		if (oldMessage != null) {
			return oldMessage;
		} else {
			messageDao.insert(message);
			return messageDao.selectById(message.getId());
		}
	}

	public List<Message> getAllMessage() {
		return messageDao.selectAll();
	}

	public Message getMessage(String id) throws Exception {
		if ((id == null) || id.isEmpty()) {
			throw new Exception("Invalid argument.");
		}

		return messageDao.selectById(id);
	}

	@Transactional
	public Message modifyMessage(Message message) throws Exception {
		if (message == null) {
			throw new Exception("Invalid argument.");
		}

		messageDao.update(message);
		return messageDao.selectById(message.getId());
	}

	public int getMessageCountInChannel(String channelId) {
		return messageDao.countInChannel(channelId);
	}

	public Pagination getMessagesInChannel(String id, Pagination pagination) throws Exception {
		if ((id == null) || id.isEmpty() || (pagination == null)) {
			throw new Exception("Invalid argument.");
		}

		int offset = (pagination.getPageIndex() - 1) * pagination.getPageSize();
		int limit = pagination.getPageSize();
		List<Model> messages = messageDao.selectInChannel(id, offset, limit);
		pagination.setObjects(messages);
		return pagination;
	}

	@Transactional
	public Content createContent(Content content) throws Exception {
		if (content == null) {
			throw new Exception("Invalid argument.");
		}

		contentDao.insert(content);
		return contentDao.selectById(content.getId());
	}

	public Content getContent(String id) throws Exception {
		if ((id == null) || id.isEmpty()) {
			throw new Exception("Invalid argument.");
		}

		return contentDao.selectById(id);
	}

	public Content getContentByMessageId(String id) throws Exception {
		if ((id == null) || id.isEmpty()) {
			throw new Exception("Invalid argument.");
		}

		return contentDao.selectByMessageId(id);
	}

	@Transactional
	public Content modifyContent(Content content) throws Exception {
		if (content == null) {
			throw new Exception("Invalid argument.");
		}

		contentDao.update(content);
		return contentDao.selectById(content.getId());
	}

	public Message getMessageByPickingStatus(String pickingStatus) throws Exception {
		if (pickingStatus == null) {
			throw new Exception("Invalid argument.");
		}

		return messageDao.selectByPickingStatus(pickingStatus);
	}
	
	public Message getMessageByPickingBatchNo(String pickingBatchNo) throws Exception {
		if (pickingBatchNo == null) {
			throw new Exception("Invalid argument.");
		}		
		
		return messageDao.selectByPickingBatchNo(pickingBatchNo);
	}

}

package com.io.nio;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.util.Iterator;
import java.util.Set;

/**
 * NIO服务器
 */
public class NIOServer {
    public static void main(String[] args) throws IOException {
        // 创建ServerSocketChannel
        ServerSocketChannel ssc = ServerSocketChannel.open();
        ssc.socket().bind(new InetSocketAddress(9090));
        // 设置非阻塞
        ssc.configureBlocking(false);

        // 创建多路复用器
        Selector selector = Selector.open();
        // 将ServerSocketChannel注册到selector，并且告知接受客户端的连接
        ssc.register(selector, SelectionKey.OP_ACCEPT);

        while(true) {
            System.out.println("wait for event happen...");
            // 阻塞，轮询监听所有注册到selector上的channel
            int select = selector.select();
            System.out.println("event has happen...");
            // 获得所有发生事件的channel
            Set<SelectionKey> selectionKeys = selector.selectedKeys();
            // 遍历所有的channel
            Iterator<SelectionKey> iterator = selectionKeys.iterator();
            while(iterator.hasNext()) {
                SelectionKey selectionKey = iterator.next();
                handle(selectionKey);
                iterator.remove();
            }
        }
    }

    public static void handle(SelectionKey selectionKey) throws IOException {

    }
}
